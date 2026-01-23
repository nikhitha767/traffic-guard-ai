import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Cpu,
  Database,
  Brain,
  LineChart,
  Server,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const technologies = [
  { name: "React.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "Flask/FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Pandas", category: "Data Processing" },
  { name: "NumPy", category: "Data Processing" },
  { name: "Scikit-learn", category: "ML" },
  { name: "ARIMA", category: "ML" },
  { name: "Prophet", category: "ML" },
  { name: "Recharts", category: "Visualization" },
];

const architectureSteps = [
  {
    icon: Database,
    title: "Data Layer",
    description: "PostgreSQL database storing historical accident records with time-series indexing.",
  },
  {
    icon: Server,
    title: "Backend API",
    description: "Flask/FastAPI RESTful endpoints for data retrieval and prediction requests.",
  },
  {
    icon: Brain,
    title: "ML Pipeline",
    description: "ARIMA and Prophet models trained on preprocessed time-series data.",
  },
  {
    icon: LineChart,
    title: "Prediction Engine",
    description: "Real-time inference engine generating risk scores and accident forecasts.",
  },
  {
    icon: Cpu,
    title: "Frontend Layer",
    description: "React.js dashboard with interactive charts and prediction interface.",
  },
];

const mlModels = [
  {
    name: "ARIMA",
    fullName: "AutoRegressive Integrated Moving Average",
    description: "Traditional time-series model for capturing temporal patterns and seasonality in accident data.",
  },
  {
    name: "Prophet",
    fullName: "Facebook Prophet",
    description: "Robust forecasting model handling holidays, trend changes, and missing data effectively.",
  },
  {
    name: "LSTM",
    fullName: "Long Short-Term Memory",
    description: "Deep learning approach for capturing complex non-linear patterns in sequential data.",
  },
];

const futureScope = [
  "Integration with real-time traffic camera feeds for live prediction updates",
  "Mobile application for on-ground traffic personnel",
  "Weather data integration for improved prediction accuracy",
  "Multi-city deployment with federated learning",
  "Integration with smart traffic light systems for automated response",
  "Citizen alert system via SMS/push notifications",
];

export default function About() {
  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
            About This Project
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Final Year B.E. Project on Time-Series Forecasting for Peak Hour Traffic Accidents
          </p>
        </div>

        {/* Project Abstract */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              Project Abstract
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              Traffic accidents during peak hours represent a critical challenge for urban traffic
              management systems. This project presents an AI-powered solution that leverages
              time-series forecasting techniques to predict traffic accident risks during morning
              and evening peak hours.
            </p>
            <p className="mt-4">
              By analyzing historical accident data patterns, our system employs machine learning
              models including ARIMA and Facebook Prophet to generate accurate predictions. The
              solution provides traffic authorities with actionable insights, enabling proactive
              resource allocation and potentially saving lives through early intervention.
            </p>
            <p className="mt-4">
              The web-based dashboard offers real-time analytics, interactive visualizations, and
              a prediction interface that allows authorities to query specific time slots for risk
              assessment. This smart city solution aligns with modern urban planning goals of
              data-driven decision making for public safety.
            </p>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-accent" />
              Technologies Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Architecture */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-accent" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {architectureSteps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    {index < architectureSteps.length - 1 && (
                      <div className="w-0.5 h-8 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ML Models */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-accent" />
              Machine Learning Models
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {mlModels.map((model) => (
                <div
                  key={model.name}
                  className="bg-muted/50 rounded-lg p-4 border border-border"
                >
                  <h4 className="font-bold text-lg text-foreground mb-1">
                    {model.name}
                  </h4>
                  <p className="text-xs text-accent mb-2">{model.fullName}</p>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Scope */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              Future Scope
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {futureScope.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-accent mt-1 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Credits */}
        <div className="mt-12 text-center">
          <Shield className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground">
            Developed as part of Final Year B.E. Project
          </p>
          <p className="text-sm text-muted-foreground">
            Department of Computer Science & Engineering
          </p>
          <p className="text-sm font-medium text-foreground mt-2">
            [Your College Name] • Academic Year 2024-25
          </p>
        </div>
      </div>
    </div>
  );
}
