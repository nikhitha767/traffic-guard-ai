from functools import wraps
from flask import request, jsonify
from services.supabase_service import supabase_client

def get_user_from_token(auth_header):
    if not auth_header or not auth_header.startswith("Bearer "):
        return None
    
    token = auth_header.split(" ")[1]
    if token == "undefined" or not token:
        return None
        
    try:
        # Verify the token with Supabase and get user data
        user_response = supabase_client.auth.get_user(jwt=token)
        if user_response and hasattr(user_response, 'user') and user_response.user:
            return user_response.user
    except Exception as e:
        print(f"Token verification failed: {e}")
    return None

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get("Authorization")
        user = get_user_from_token(auth_header)
        
        if not user:
            return jsonify({
                "error": "Unauthorized",
                "message": "Valid session token required"
            }), 401
            
        return f(user, *args, **kwargs)
    return decorated
