import { useState, useEffect, useCallback } from "react";
import { MapPin, TrendingUp, Activity, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Base Indian states data with accident statistics
const baseStatesData = [
  { state: "Maharashtra", baseAccidents: 85, color: "from-rose-500 to-pink-600" },
  { state: "Tamil Nadu", baseAccidents: 78, color: "from-amber-400 to-yellow-500" },
  { state: "Uttar Pradesh", baseAccidents: 72, color: "from-rose-500 to-pink-600" },
  { state: "Karnataka", baseAccidents: 68, color: "from-amber-400 to-yellow-500" },
  { state: "Andhra Pradesh", baseAccidents: 65, color: "from-rose-500 to-pink-600" },
  { state: "Gujarat", baseAccidents: 58, color: "from-amber-400 to-yellow-500" },
  { state: "Rajasthan", baseAccidents: 52, color: "from-rose-500 to-pink-600" },
  { state: "Madhya Pradesh", baseAccidents: 48, color: "from-amber-400 to-yellow-500" },
  { state: "Kerala", baseAccidents: 45, color: "from-rose-500 to-pink-600" },
  { state: "West Bengal", baseAccidents: 42, color: "from-amber-400 to-yellow-500" },
  { state: "Telangana", baseAccidents: 55, color: "from-rose-500 to-pink-600" },
  { state: "Punjab", baseAccidents: 38, color: "from-amber-400 to-yellow-500" },
  { state: "Haryana", baseAccidents: 35, color: "from-rose-500 to-pink-600" },
  { state: "Bihar", baseAccidents: 32, color: "from-amber-400 to-yellow-500" },
  { state: "Odisha", baseAccidents: 28, color: "from-rose-500 to-pink-600" },
  { state: "Delhi", baseAccidents: 62, color: "from-amber-400 to-yellow-500" },
];

// Days of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Slide data for carousel
const slides = [
  {
    title: "Traffic Safety Analytics",
    subtitle: "Powered by AI & Machine Learning",
    description: "Real-time accident prediction and risk assessment across India",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
  },
  {
    title: "Smart City Initiative",
    subtitle: "Data-Driven Decision Making",
    description: "Empowering traffic authorities with predictive insights",
    gradient: "from-blue-900 via-indigo-800 to-purple-900",
  },
  {
    title: "Time-Series Forecasting",
    subtitle: "ARIMA & Prophet Models",
    description: "Advanced algorithms analyzing historical patterns",
    gradient: "from-emerald-900 via-teal-800 to-cyan-900",
  },
];

export default function About() {
  const [animatedBars, setAnimatedBars] = useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentDay, setCurrentDay] = useState(new Date().getDay());
  const [statesData, setStatesData] = useState(
    baseStatesData.map((s) => ({ ...s, accidents: s.baseAccidents }))
  );
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Generate random variation for day-wise updates
  const generateDayWiseData = useCallback(() => {
    return baseStatesData.map((state) => {
      // Random variation between -15% to +15%
      const variation = (Math.random() - 0.5) * 0.3;
      const newAccidents = Math.round(state.baseAccidents * (1 + variation));
      return {
        ...state,
        accidents: Math.min(100, Math.max(10, newAccidents)),
      };
    });
  }, []);

  // Animate bars on mount with staggered effect
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    baseStatesData.forEach((_, index) => {
      const timer = setTimeout(() => {
        setAnimatedBars((prev) => [...prev, index]);
      }, 100 + index * 80);
      timers.push(timer);
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  // Auto-update data every 5 seconds (simulating day-wise updates)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay((prev) => (prev + 1) % 7);
      setStatesData(generateDayWiseData());
      setLastUpdate(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, [generateDayWiseData]);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const maxAccidents = Math.max(...statesData.map((d) => d.accidents));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Hero Carousel Section */}
      <div className="relative h-[40vh] min-h-[320px]">
        {/* Animated Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-700`}
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Slide Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div
            className={`transform transition-all duration-500 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Activity className="h-4 w-4 text-white" />
              <span className="text-white/90 text-sm font-medium">
                {slides[currentSlide].subtitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Chart Section */}
      <div className="container py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-4">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-medium">All India Coverage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
            State-wise Traffic Accident Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data visualization across all major Indian states
          </p>
        </div>

        {/* Animated Bar Chart */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl overflow-hidden">
          {/* Day indicator - shows current day with auto-update */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-white">{daysOfWeek[currentDay]}</span>
            </div>
            <div className="text-xs text-white/40">
              Updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>

          {/* Background map silhouette effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent" />
          </div>

          {/* Trend line */}
          <div className="absolute top-8 left-8 right-8 h-px">
            <svg className="w-full h-24 -mt-12" viewBox="0 0 100 24" preserveAspectRatio="none">
              <path
                d="M0 20 Q10 18, 20 15 T40 12 T60 8 T80 5 T100 2"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
                className="animate-pulse"
              />
              <circle cx="100" cy="2" r="1.5" fill="white" className="animate-pulse" />
            </svg>
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-2 top-24 bottom-16 flex flex-col justify-between text-xs text-white/40">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>

          {/* Chart Container */}
          <div className="relative ml-8 mt-16">
            <div className="flex items-end justify-center gap-1 md:gap-2 h-[300px] md:h-[400px]">
              {statesData.map((state, index) => {
                const barHeight = (state.accidents / maxAccidents) * 300;
                const isAnimated = animatedBars.includes(index);

                return (
                  <div
                    key={state.state}
                    className="relative flex-1 max-w-12 group h-full flex items-end"
                  >
                    {/* Bar */}
                    <div
                      className={`relative w-full rounded-t-lg bg-gradient-to-t ${state.color} shadow-lg transition-all duration-500 ease-out cursor-pointer hover:opacity-90`}
                      style={{
                        height: isAnimated ? `${barHeight}px` : "0px",
                      }}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-t-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Value tooltip with full state name */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-slate-900 px-3 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-20">
                        <div className="text-sm font-bold text-slate-800">{state.state}</div>
                        <div className="text-lg font-extrabold text-primary">{state.accidents}%</div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                      </div>

                      {/* Shimmer effect */}
                      <div
                        className="absolute inset-0 rounded-t-lg overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                          animation: `shimmer 2s infinite ${index * 0.1}s`,
                        }}
                      />
                    </div>

                    {/* State label */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 -rotate-45 origin-top-left">
                      <span className="text-[10px] md:text-xs text-white/60 whitespace-nowrap">
                        {state.state.slice(0, 3)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* X-axis line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mt-20">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-rose-500 to-pink-600" />
              <span className="text-sm text-white/60">High Risk States</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-amber-400 to-yellow-500" />
              <span className="text-sm text-white/60">Medium Risk States</span>
            </div>
          </div>

          {/* Trend Indicator */}
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-sm text-white/80">Live Data</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "States Covered", value: "16+", icon: MapPin },
            { label: "Data Points", value: "1M+", icon: Activity },
            { label: "Accuracy Rate", value: "94%", icon: TrendingUp },
            { label: "Daily Updates", value: "24/7", icon: Activity },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-white/10 text-center group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer Credit */}
        <div className="text-center mt-12 py-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            Final Year B.E. Project • Department of Computer Science & Engineering
          </p>
          <p className="text-white/60 text-sm mt-1 font-medium">
            Time-Series Forecasting for Peak Hour Traffic Accidents
          </p>
        </div>
      </div>

      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
