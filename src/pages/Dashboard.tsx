import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { RiskBadge } from "@/components/ui/risk-badge";
import {
  AlertTriangle,
  Clock,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";
import {
  hourlyAccidentData,
  monthlyAccidentData,
  peakHourTrendData,
  highRiskTimeSlots,
} from "@/lib/dummy-data";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const chartTooltipStyle = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
};

export default function Dashboard() {
  return (
    <div className="py-8 md:py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-display">Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Real-time traffic accident insights and predictions
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Accidents (YTD)"
            value="1,823"
            subtitle="This year"
            icon={AlertTriangle}
            trend={{ value: 12, positive: false }}
            variant="danger"
          />
          <StatCard
            title="High Risk Hours"
            value="4"
            subtitle="Identified daily"
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="Peak Accident Time"
            value="5:30 PM"
            subtitle="Evening rush"
            icon={TrendingUp}
            variant="default"
          />
          <StatCard
            title="Prediction Accuracy"
            value="91.2%"
            subtitle="Model performance"
            icon={Target}
            trend={{ value: 3.2, positive: true }}
            variant="success"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Accidents per Hour */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Accidents per Hour</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hourlyAccidentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="hour"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                      interval={1}
                    />
                    <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                    <Tooltip contentStyle={chartTooltipStyle} />
                    <Bar
                      dataKey="accidents"
                      fill="hsl(var(--chart-primary))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Peak Hour Trend */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Peak Hour Trend by Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={peakHourTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="day"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                    <Tooltip contentStyle={chartTooltipStyle} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="morning"
                      name="Morning Peak"
                      stroke="hsl(var(--chart-warning))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--chart-warning))" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="evening"
                      name="Evening Peak"
                      stroke="hsl(var(--chart-danger))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--chart-danger))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Area Chart */}
        <Card className="shadow-card mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Accident Trend (Actual vs Predicted)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyAccidentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                  <Tooltip contentStyle={chartTooltipStyle} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="accidents"
                    name="Actual"
                    stroke="hsl(var(--chart-secondary))"
                    fill="hsl(var(--chart-secondary) / 0.2)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    name="Predicted"
                    stroke="hsl(var(--chart-primary))"
                    fill="hsl(var(--chart-primary) / 0.2)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* High Risk Time Slots */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">High Risk Time Slots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highRiskTimeSlots.map((slot, index) => (
                <div
                  key={slot.time}
                  className="bg-muted/50 rounded-lg p-4 border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <RiskBadge level={slot.risk} />
                  </div>
                  <p className="font-semibold text-foreground mb-1">{slot.time}</p>
                  <p className="text-sm text-muted-foreground">
                    Avg. {slot.avgAccidents} accidents/day
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
