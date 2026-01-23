// Dummy dataset for traffic accidents
export interface AccidentRecord {
  id: number;
  date: string;
  time: string;
  location: string;
  accidentCount: number;
  peakHour: "Morning" | "Evening" | "Off-Peak";
  severity: "Minor" | "Moderate" | "Severe";
}

export const accidentDataset: AccidentRecord[] = [
  { id: 1, date: "2024-01-15", time: "08:30", location: "Highway 101 - Junction A", accidentCount: 3, peakHour: "Morning", severity: "Moderate" },
  { id: 2, date: "2024-01-15", time: "17:45", location: "Main Street Intersection", accidentCount: 2, peakHour: "Evening", severity: "Minor" },
  { id: 3, date: "2024-01-16", time: "09:15", location: "Central Business District", accidentCount: 4, peakHour: "Morning", severity: "Severe" },
  { id: 4, date: "2024-01-16", time: "14:00", location: "Industrial Zone Road", accidentCount: 1, peakHour: "Off-Peak", severity: "Minor" },
  { id: 5, date: "2024-01-17", time: "07:45", location: "School Zone - West", accidentCount: 2, peakHour: "Morning", severity: "Moderate" },
  { id: 6, date: "2024-01-17", time: "18:30", location: "Shopping Mall Exit", accidentCount: 5, peakHour: "Evening", severity: "Severe" },
  { id: 7, date: "2024-01-18", time: "08:00", location: "Railway Crossing North", accidentCount: 1, peakHour: "Morning", severity: "Minor" },
  { id: 8, date: "2024-01-18", time: "12:30", location: "Hospital Road", accidentCount: 2, peakHour: "Off-Peak", severity: "Moderate" },
  { id: 9, date: "2024-01-19", time: "17:15", location: "Tech Park Entrance", accidentCount: 3, peakHour: "Evening", severity: "Moderate" },
  { id: 10, date: "2024-01-19", time: "09:00", location: "University Gate", accidentCount: 2, peakHour: "Morning", severity: "Minor" },
  { id: 11, date: "2024-01-20", time: "07:30", location: "Highway 101 - Junction B", accidentCount: 4, peakHour: "Morning", severity: "Severe" },
  { id: 12, date: "2024-01-20", time: "18:00", location: "Stadium Road", accidentCount: 6, peakHour: "Evening", severity: "Severe" },
  { id: 13, date: "2024-01-21", time: "08:45", location: "Airport Expressway", accidentCount: 2, peakHour: "Morning", severity: "Moderate" },
  { id: 14, date: "2024-01-21", time: "16:30", location: "Market Area Junction", accidentCount: 3, peakHour: "Evening", severity: "Moderate" },
  { id: 15, date: "2024-01-22", time: "10:00", location: "Residential Zone C", accidentCount: 1, peakHour: "Off-Peak", severity: "Minor" },
  { id: 16, date: "2024-01-22", time: "17:00", location: "Bus Terminal Exit", accidentCount: 4, peakHour: "Evening", severity: "Severe" },
  { id: 17, date: "2024-01-23", time: "08:15", location: "Office Complex Road", accidentCount: 3, peakHour: "Morning", severity: "Moderate" },
  { id: 18, date: "2024-01-23", time: "13:45", location: "Park Avenue", accidentCount: 1, peakHour: "Off-Peak", severity: "Minor" },
  { id: 19, date: "2024-01-24", time: "07:00", location: "Metro Station Area", accidentCount: 2, peakHour: "Morning", severity: "Minor" },
  { id: 20, date: "2024-01-24", time: "18:45", location: "Entertainment District", accidentCount: 5, peakHour: "Evening", severity: "Severe" },
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

// Prediction simulation
export function simulatePrediction(date: string, time: string): {
  predictedCount: number;
  riskLevel: "low" | "medium" | "high";
  confidence: number;
} {
  const hour = parseInt(time.split(":")[0]);
  const isWeekend = new Date(date).getDay() === 0 || new Date(date).getDay() === 6;
  
  let baseCount = 2;
  let riskLevel: "low" | "medium" | "high" = "low";
  
  // Morning peak (7-9 AM)
  if (hour >= 7 && hour <= 9 && !isWeekend) {
    baseCount = Math.floor(Math.random() * 8) + 15;
    riskLevel = baseCount > 20 ? "high" : "medium";
  }
  // Evening peak (5-7 PM)
  else if (hour >= 17 && hour <= 19 && !isWeekend) {
    baseCount = Math.floor(Math.random() * 10) + 18;
    riskLevel = baseCount > 22 ? "high" : "medium";
  }
  // Off-peak
  else {
    baseCount = Math.floor(Math.random() * 5) + 3;
    riskLevel = baseCount > 6 ? "medium" : "low";
  }
  
  return {
    predictedCount: baseCount,
    riskLevel,
    confidence: Math.floor(Math.random() * 10) + 85,
  };
}
