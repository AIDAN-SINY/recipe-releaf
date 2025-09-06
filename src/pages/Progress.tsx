import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MobileLayout } from '@/components/Layout/MobileLayout';
import { TrendingUp, Target, Calendar, Award, Scale, Activity, Apple } from 'lucide-react';

const goals = [
  {
    title: 'Weight Loss',
    current: 68,
    target: 65,
    unit: 'kg',
    progress: 60,
    status: 'On Track',
    color: 'text-success'
  },
  {
    title: 'Daily Calories',
    current: 1650,
    target: 1800,
    unit: 'cal',
    progress: 92,
    status: 'Excellent',
    color: 'text-primary'
  },
  {
    title: 'Water Intake',
    current: 2.1,
    target: 2.5,
    unit: 'L',
    progress: 84,
    status: 'Good',
    color: 'text-secondary'
  }
];

const weeklyStats = [
  { label: 'Meals Logged', value: '28', change: '+12%', trend: 'up' },
  { label: 'Avg Calories', value: '1,675', change: '-5%', trend: 'down' },
  { label: 'Exercise Days', value: '5', change: '+25%', trend: 'up' },
  { label: 'Weight Change', value: '-0.8 kg', change: '-2.3%', trend: 'down' }
];

const achievements = [
  { title: '7-Day Streak', description: 'Logged meals for 7 consecutive days', earned: true },
  { title: 'Hydration Hero', description: 'Met daily water goal for 5 days', earned: true },
  { title: 'Veggie Lover', description: 'Ate 5+ servings of vegetables daily', earned: false },
  { title: 'Workout Warrior', description: 'Exercised 4+ times this week', earned: true }
];

const Progress = () => {
  return (
    <MobileLayout>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Progress Tracking</h1>
          <p className="text-muted-foreground">
            Monitor your health journey and celebrate milestones
          </p>
        </div>

        {/* Goals Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Current Goals</h2>
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">{goal.title}</h3>
                    <Badge 
                      variant="outline"
                      className={`${goal.color} border-current`}
                    >
                      {goal.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-foreground">
                      {goal.current} <span className="text-sm font-normal text-muted-foreground">{goal.unit}</span>
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Target: {goal.target} {goal.unit}
                    </span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        goal.color.includes('success') ? 'bg-success' :
                        goal.color.includes('primary') ? 'bg-gradient-primary' : 'bg-secondary'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {goal.progress}% of target reached
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Statistics */}
        <Card className="mb-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              This Week's Stats
            </CardTitle>
            <CardDescription>Your progress compared to last week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {weeklyStats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted">
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className={`h-3 w-3 ${
                      stat.trend === 'up' ? 'text-success' : 'text-destructive'
                    } ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span className={`text-xs ${
                      stat.trend === 'up' ? 'text-success' : 'text-destructive'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weight Progress Chart Placeholder */}
        <Card className="mb-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Weight Progress
            </CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 bg-gradient-soft rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Weight tracking chart will be displayed here</p>
                <p className="text-sm text-muted-foreground mt-2">Connect to see your progress visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Achievements
            </CardTitle>
            <CardDescription>Your health milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    achievement.earned ? 'bg-success/10 border border-success/20' : 'bg-muted'
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    achievement.earned ? 'bg-success text-white' : 'bg-muted-foreground/20'
                  }`}>
                    <Award className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${
                      achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <Badge className="bg-success text-white">
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-soft border-0">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Update your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Scale className="h-6 w-6 text-primary" />
                <span className="text-xs">Log Weight</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Activity className="h-6 w-6 text-primary" />
                <span className="text-xs">Add Exercise</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Apple className="h-6 w-6 text-primary" />
                <span className="text-xs">Log Meal</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Progress;