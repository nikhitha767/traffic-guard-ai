"""
Traffic Guard AI - REALISTIC Accident Risk Model
Predicts accident risk based on environmental & time conditions
NO post-accident features used
Uses LOCAL CSV dataset
"""

import pandas as pd
import joblib
import os

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder, FunctionTransformer
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import r2_score, mean_absolute_error

print("=" * 60)
print("TRAFFIC GUARD AI - ACCIDENT RISK MODEL TRAINING (PIPELINE + AUTO FEATURES)")
print("=" * 60)

# ==================== STEP 1: LOAD LOCAL DATA ====================
csv_path = "traffic_accidents1.csv"

if not os.path.exists(csv_path):
    print("❌ traffic_accidents1.csv file kanipinchaledu!")
    exit()

df = pd.read_csv(csv_path)
if df.empty:
    print("❌ CSV file empty ga undi!")
    exit()

print(f"✅ Loaded {len(df)} traffic accident records")

# ==================== STEP 2: SELECT PRE-ACCIDENT FEATURES ====================
FEATURE_COLUMNS = [
    'weather_condition',
    'lighting_condition',
    'trafficway_type',
    'alignment',
    'roadway_surface_condition',
    'road_defect',
    'crash_hour',
    'crash_day_of_week',
    'crash_month'
]

missing_cols = [col for col in FEATURE_COLUMNS if col not in df.columns]
if missing_cols:
    print(f"❌ Missing columns in CSV: {missing_cols}")
    exit()

df = df[FEATURE_COLUMNS].copy()

# ==================== STEP 3: CLEAN DATA ====================
for col in FEATURE_COLUMNS:
    if df[col].dtype == 'object':
        df[col] = df[col].fillna("UNKNOWN")
    else:
        df[col] = pd.to_numeric(df[col], errors="coerce").fillna(0)

# ==================== STEP 4: CREATE TARGET ====================
group_cols = FEATURE_COLUMNS

df_grouped = df.groupby(group_cols).size().reset_index(name='accident_frequency')
max_frequency = df_grouped['accident_frequency'].max()
print(f"📊 Max accident frequency: {max_frequency}")

# ==================== STEP 5: SPLIT FEATURES & TARGET ====================
X = df_grouped.drop(columns=['accident_frequency'])
y = df_grouped['accident_frequency']

# ==================== STEP 6: PIPELINE WITH AUTO FEATURE ENGINEERING ====================
# Function to add engineered features
def add_features(X):
    X = X.copy()
    X['is_rush_hour'] = X['crash_hour'].apply(lambda x: 1 if (7 <= x <= 9 or 17 <= x <= 20) else 0)
    X['is_weekend'] = X['crash_day_of_week'].apply(lambda x: 1 if x >= 6 else 0)
    return X

# Identify categorical columns
categorical_cols = [
    "weather_condition", "lighting_condition", "trafficway_type", 
    "alignment", "roadway_surface_condition", "road_defect"
]
print(f"📊 Categorical features: {categorical_cols}")

preprocessor = ColumnTransformer(
    transformers=[("cat", OneHotEncoder(handle_unknown="ignore"), categorical_cols)],
    remainder="passthrough"
)

# Full pipeline
pipeline = Pipeline(steps=[
    ("feature_adder", FunctionTransformer(add_features)),
    ("preprocessor", preprocessor),
    ("model", RandomForestRegressor(n_estimators=200, max_depth=25, random_state=42, n_jobs=-1))
])

# ==================== STEP 7: TRAIN ====================
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
pipeline.fit(X_train, y_train)

# ==================== STEP 8: EVALUATE ====================
y_pred = pipeline.predict(X_test)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
print(f"\nR² Score: {r2:.4f}")
print(f"MAE: {mae:.4f}")

# ==================== STEP 9: SAVE MODEL ====================
joblib.dump(pipeline, "model.joblib")
joblib.dump(max_frequency, "max_frequency.joblib")
print("✅ Model saved as model.joblib")
print("✅ Max frequency saved as max_frequency.joblib")
