// Dummy dataset for traffic accidents
export interface AccidentRecord {
  id: number;
  date: string;
  time: string;
  location: string;
  city: string;
  area: string;
  accidentCount: number;
  peakHour: "Morning" | "Evening" | "Off-Peak";
  severity: "Minor" | "Moderate" | "Severe";
}

export const accidentDataset: AccidentRecord[] = [
  // Vijayawada
  { id: 1, date: "2024-01-15", time: "08:30", location: "Benz Circle Junction", city: "Vijayawada", area: "Benz Circle", accidentCount: 4, peakHour: "Morning", severity: "Severe" },
  { id: 2, date: "2024-01-15", time: "17:45", location: "MG Road Intersection", city: "Vijayawada", area: "MG Road", accidentCount: 3, peakHour: "Evening", severity: "Moderate" },
  { id: 3, date: "2024-01-16", time: "09:15", location: "Eluru Road Flyover", city: "Vijayawada", area: "Eluru Road", accidentCount: 2, peakHour: "Morning", severity: "Minor" },
  { id: 4, date: "2024-01-17", time: "18:30", location: "Bandar Road Junction", city: "Vijayawada", area: "Bandar Road", accidentCount: 5, peakHour: "Evening", severity: "Severe" },
  { id: 5, date: "2024-01-18", time: "08:00", location: "Governorpet Market", city: "Vijayawada", area: "Governorpet", accidentCount: 2, peakHour: "Morning", severity: "Minor" },
  
  // Hyderabad
  { id: 6, date: "2024-01-15", time: "08:45", location: "HITEC City Junction", city: "Hyderabad", area: "HITEC City", accidentCount: 6, peakHour: "Morning", severity: "Severe" },
  { id: 7, date: "2024-01-16", time: "17:30", location: "Gachibowli Flyover", city: "Hyderabad", area: "Gachibowli", accidentCount: 4, peakHour: "Evening", severity: "Moderate" },
  { id: 8, date: "2024-01-17", time: "09:00", location: "Madhapur Road", city: "Hyderabad", area: "Madhapur", accidentCount: 3, peakHour: "Morning", severity: "Moderate" },
  { id: 9, date: "2024-01-18", time: "18:15", location: "Ameerpet Metro", city: "Hyderabad", area: "Ameerpet", accidentCount: 2, peakHour: "Evening", severity: "Minor" },
  { id: 10, date: "2024-01-19", time: "07:45", location: "Secunderabad Station", city: "Hyderabad", area: "Secunderabad", accidentCount: 5, peakHour: "Morning", severity: "Severe" },
  
  // Chennai
  { id: 11, date: "2024-01-15", time: "08:15", location: "Anna Salai Junction", city: "Chennai", area: "Anna Salai", accidentCount: 4, peakHour: "Morning", severity: "Moderate" },
  { id: 12, date: "2024-01-16", time: "17:00", location: "T Nagar Signal", city: "Chennai", area: "T Nagar", accidentCount: 3, peakHour: "Evening", severity: "Moderate" },
  { id: 13, date: "2024-01-17", time: "09:30", location: "OMR Toll Gate", city: "Chennai", area: "OMR", accidentCount: 5, peakHour: "Morning", severity: "Severe" },
  { id: 14, date: "2024-01-18", time: "18:45", location: "Adyar Bridge", city: "Chennai", area: "Adyar", accidentCount: 2, peakHour: "Evening", severity: "Minor" },
  
  // Bangalore
  { id: 15, date: "2024-01-15", time: "08:00", location: "Silk Board Junction", city: "Bangalore", area: "Silk Board", accidentCount: 7, peakHour: "Morning", severity: "Severe" },
  { id: 16, date: "2024-01-16", time: "17:15", location: "Electronic City Flyover", city: "Bangalore", area: "Electronic City", accidentCount: 4, peakHour: "Evening", severity: "Moderate" },
  { id: 17, date: "2024-01-17", time: "09:00", location: "Whitefield Main Road", city: "Bangalore", area: "Whitefield", accidentCount: 3, peakHour: "Morning", severity: "Moderate" },
  { id: 18, date: "2024-01-18", time: "18:30", location: "Koramangala Junction", city: "Bangalore", area: "Koramangala", accidentCount: 2, peakHour: "Evening", severity: "Minor" },
  
  // Mumbai
  { id: 19, date: "2024-01-15", time: "08:30", location: "Western Express Highway", city: "Mumbai", area: "Andheri", accidentCount: 5, peakHour: "Morning", severity: "Severe" },
  { id: 20, date: "2024-01-16", time: "17:45", location: "Bandra Worli Sea Link", city: "Mumbai", area: "Bandra", accidentCount: 3, peakHour: "Evening", severity: "Moderate" },
  { id: 21, date: "2024-01-17", time: "09:15", location: "Dadar TT Circle", city: "Mumbai", area: "Dadar", accidentCount: 4, peakHour: "Morning", severity: "Moderate" },
  { id: 22, date: "2024-01-18", time: "18:00", location: "Powai Lake Road", city: "Mumbai", area: "Powai", accidentCount: 2, peakHour: "Evening", severity: "Minor" },
  
  // Delhi
  { id: 23, date: "2024-01-15", time: "08:45", location: "ITO Junction", city: "Delhi", area: "ITO", accidentCount: 6, peakHour: "Morning", severity: "Severe" },
  { id: 24, date: "2024-01-16", time: "17:30", location: "Connaught Place Ring", city: "Delhi", area: "Connaught Place", accidentCount: 4, peakHour: "Evening", severity: "Moderate" },
  { id: 25, date: "2024-01-17", time: "09:00", location: "Nehru Place Flyover", city: "Delhi", area: "Nehru Place", accidentCount: 3, peakHour: "Morning", severity: "Moderate" },
];

// Chart data
export const hourlyAccidentData = [
  { hour: "6AM", accidents: 5 },
  { hour: "7AM", accidents: 12 },
  { hour: "8AM", accidents: 28 },
  { hour: "9AM", accidents: 22 },
  { hour: "10AM", accidents: 8 },
  { hour: "11AM", accidents: 6 },
  { hour: "12PM", accidents: 10 },
  { hour: "1PM", accidents: 7 },
  { hour: "2PM", accidents: 5 },
  { hour: "3PM", accidents: 8 },
  { hour: "4PM", accidents: 15 },
  { hour: "5PM", accidents: 32 },
  { hour: "6PM", accidents: 25 },
  { hour: "7PM", accidents: 18 },
  { hour: "8PM", accidents: 10 },
  { hour: "9PM", accidents: 6 },
];

export const monthlyAccidentData = [
  { month: "Jan", accidents: 145, predicted: 150 },
  { month: "Feb", accidents: 132, predicted: 138 },
  { month: "Mar", accidents: 158, predicted: 155 },
  { month: "Apr", accidents: 142, predicted: 148 },
  { month: "May", accidents: 128, predicted: 135 },
  { month: "Jun", accidents: 165, predicted: 160 },
  { month: "Jul", accidents: 178, predicted: 175 },
  { month: "Aug", accidents: 162, predicted: 168 },
  { month: "Sep", accidents: 148, predicted: 152 },
  { month: "Oct", accidents: 155, predicted: 158 },
  { month: "Nov", accidents: 138, predicted: 142 },
  { month: "Dec", accidents: 172, predicted: 170 },
];

export const peakHourTrendData = [
  { day: "Mon", morning: 35, evening: 42 },
  { day: "Tue", morning: 28, evening: 38 },
  { day: "Wed", morning: 32, evening: 45 },
  { day: "Thu", morning: 30, evening: 40 },
  { day: "Fri", morning: 38, evening: 55 },
  { day: "Sat", morning: 15, evening: 32 },
  { day: "Sun", morning: 12, evening: 25 },
];

export const highRiskTimeSlots = [
  { time: "8:00 AM - 9:00 AM", risk: "high" as const, avgAccidents: 28 },
  { time: "5:00 PM - 6:00 PM", risk: "high" as const, avgAccidents: 32 },
  { time: "6:00 PM - 7:00 PM", risk: "medium" as const, avgAccidents: 25 },
  { time: "7:00 AM - 8:00 AM", risk: "medium" as const, avgAccidents: 12 },
];

// Location data with risk profiles
export interface LocationData {
  id: string;
  name: string;
  riskMultiplier: number;
  baseRisk: "low" | "medium" | "high";
  historicalAccidents: number;
  description: string;
  coordinates?: [number, number]; // [latitude, longitude]
}

export const locations: LocationData[] = [
  // Vijayawada locations
  { id: "benz-circle", name: "Benz Circle Junction", riskMultiplier: 1.5, baseRisk: "high", historicalAccidents: 45, description: "Major highway junction", coordinates: [16.5062, 80.6480] },
  { id: "mg-road-vijayawada", name: "MG Road, Vijayawada", riskMultiplier: 1.3, baseRisk: "high", historicalAccidents: 38, description: "Central city road", coordinates: [16.5180, 80.6260] },
  { id: "eluru-road", name: "Eluru Road", riskMultiplier: 1.2, baseRisk: "medium", historicalAccidents: 28, description: "Major arterial road", coordinates: [16.5150, 80.6180] },
  { id: "bandar-road", name: "Bandar Road Junction", riskMultiplier: 1.4, baseRisk: "high", historicalAccidents: 42, description: "High traffic junction", coordinates: [16.5089, 80.6200] },
  { id: "governorpet", name: "Governorpet Market", riskMultiplier: 1.1, baseRisk: "medium", historicalAccidents: 22, description: "Busy market area", coordinates: [16.5156, 80.6178] },
  
  // Hyderabad locations
  { id: "hitec-city", name: "HITEC City Junction", riskMultiplier: 1.4, baseRisk: "high", historicalAccidents: 48, description: "IT corridor junction", coordinates: [17.4435, 78.3772] },
  { id: "gachibowli", name: "Gachibowli Flyover", riskMultiplier: 1.3, baseRisk: "medium", historicalAccidents: 35, description: "Major flyover", coordinates: [17.4401, 78.3489] },
  { id: "madhapur", name: "Madhapur Road", riskMultiplier: 1.2, baseRisk: "medium", historicalAccidents: 30, description: "Tech park area", coordinates: [17.4484, 78.3908] },
  { id: "ameerpet", name: "Ameerpet Metro", riskMultiplier: 1.1, baseRisk: "medium", historicalAccidents: 25, description: "Metro station area", coordinates: [17.4375, 78.4483] },
  { id: "secunderabad", name: "Secunderabad Station", riskMultiplier: 1.5, baseRisk: "high", historicalAccidents: 50, description: "Railway station area", coordinates: [17.4399, 78.5011] },
  
  // Chennai locations
  { id: "anna-salai", name: "Anna Salai Junction", riskMultiplier: 1.3, baseRisk: "high", historicalAccidents: 40, description: "Main city arterial", coordinates: [13.0604, 80.2496] },
  { id: "t-nagar", name: "T Nagar Signal", riskMultiplier: 1.2, baseRisk: "medium", historicalAccidents: 32, description: "Shopping district", coordinates: [13.0418, 80.2341] },
  { id: "omr", name: "OMR Toll Gate", riskMultiplier: 1.4, baseRisk: "high", historicalAccidents: 45, description: "IT expressway", coordinates: [12.9165, 80.2274] },
  
  // Bangalore locations
  { id: "silk-board", name: "Silk Board Junction", riskMultiplier: 1.6, baseRisk: "high", historicalAccidents: 55, description: "Most congested junction", coordinates: [12.9177, 77.6238] },
  { id: "electronic-city", name: "Electronic City Flyover", riskMultiplier: 1.3, baseRisk: "medium", historicalAccidents: 35, description: "Tech park flyover", coordinates: [12.8458, 77.6692] },
  { id: "whitefield", name: "Whitefield Main Road", riskMultiplier: 1.2, baseRisk: "medium", historicalAccidents: 28, description: "IT hub area", coordinates: [12.9698, 77.7500] },
  
  // Mumbai locations
  { id: "western-express", name: "Western Express Highway", riskMultiplier: 1.5, baseRisk: "high", historicalAccidents: 52, description: "Major highway", coordinates: [19.1136, 72.8697] },
  { id: "bandra-worli", name: "Bandra Worli Sea Link", riskMultiplier: 1.2, baseRisk: "medium", historicalAccidents: 25, description: "Sea link bridge", coordinates: [19.0380, 72.8190] },
  
  // Delhi locations
  { id: "ito", name: "ITO Junction", riskMultiplier: 1.5, baseRisk: "high", historicalAccidents: 48, description: "Central Delhi junction", coordinates: [28.6289, 77.2405] },
  { id: "connaught-place", name: "Connaught Place Ring", riskMultiplier: 1.3, baseRisk: "medium", historicalAccidents: 35, description: "Commercial hub", coordinates: [28.6315, 77.2167] },
];

// Prediction simulation with location
export function simulatePrediction(date: string, time: string, locationId?: string): {
  predictedCount: number;
  riskLevel: "low" | "medium" | "high";
  confidence: number;
  location?: LocationData;
  factors: string[];
} {
  const hour = parseInt(time.split(":")[0]);
  const isWeekend = new Date(date).getDay() === 0 || new Date(date).getDay() === 6;
  const location = locationId ? locations.find(l => l.id === locationId) : undefined;
  const riskMultiplier = location?.riskMultiplier || 1;
  
  let baseCount = 2;
  let riskLevel: "low" | "medium" | "high" = "low";
  const factors: string[] = [];
  
  // Morning peak (7-9 AM)
  if (hour >= 7 && hour <= 9 && !isWeekend) {
    baseCount = Math.floor((Math.random() * 8 + 15) * riskMultiplier);
    factors.push("Morning rush hour traffic");
  }
  // Evening peak (5-7 PM)
  else if (hour >= 17 && hour <= 19 && !isWeekend) {
    baseCount = Math.floor((Math.random() * 10 + 18) * riskMultiplier);
    factors.push("Evening rush hour traffic");
  }
  // Off-peak
  else {
    baseCount = Math.floor((Math.random() * 5 + 3) * riskMultiplier);
    factors.push("Off-peak traffic conditions");
  }
  
  // Weekend factor
  if (isWeekend) {
    baseCount = Math.floor(baseCount * 0.7);
    factors.push("Weekend - reduced traffic");
  }
  
  // Location-based factors
  if (location) {
    factors.push(`Location: ${location.description}`);
    if (location.baseRisk === "high") {
      factors.push("High-risk zone historically");
    }
  }
  
  // Determine risk level based on count
  if (baseCount > 20) {
    riskLevel = "high";
  } else if (baseCount > 10) {
    riskLevel = "medium";
  } else {
    riskLevel = "low";
  }
  
  return {
    predictedCount: baseCount,
    riskLevel,
    confidence: Math.floor(Math.random() * 10) + 85,
    location,
    factors,
  };
}
