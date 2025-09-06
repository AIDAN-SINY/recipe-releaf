import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MobileLayout } from '@/components/Layout/MobileLayout';
import { Calendar, MessageCircle, Utensils, TrendingUp, Apple, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickActions = [
  {
    icon: Calendar,
    title: 'Meal Planning',
    description: 'Plan your weekly meals',
    path: '/meal-planning',
    gradient: 'bg-gradient-primary'
  },
  {
    icon: MessageCircle,
    title: 'Consultation',
    description: 'Talk to a nutritionist',
    path: '/consultation',
    gradient: 'bg-gradient-warm'
  },
  {
    icon: Utensils,
    title: 'Meal Suggestions',
    description: 'Discover healthy recipes',
    path: '/meal-suggestions',
    gradient: 'bg-secondary'
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor your goals',
    path: '/progress',
    gradient: 'bg-success'
  }
];

const todayStats = [
  { icon: Apple, label: 'Calories', value: '1,245', target: '1,800', color: 'text-success' },
  { icon: Clock, label: 'Meals', value: '2', target: '5', color: 'text-warning' },
  { icon: Target, label: 'Goals Met', value: '3', target: '5', color: 'text-primary' },
];

const Dashboard = () => {
  return (
    <MobileLayout>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Good Morning, Sarah! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to continue your healthy eating journey?
          </p>
        </div>

        {/* Today's Overview */}
        <Card className="mb-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="text-xl">Today's Overview</CardTitle>
            <CardDescription>Your progress so far today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {todayStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-flex p-3 rounded-full bg-muted mb-2`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">of {stat.target}</p>
                    <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.path}>
                <Card className="h-full shadow-soft border-0 hover:shadow-primary transition-shadow">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl ${action.gradient} mb-4`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Next Meal Reminder */}
        <Card className="mb-8 bg-gradient-soft border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Next Meal</h3>
                <p className="text-sm text-muted-foreground">Lunch in 2 hours</p>
                <p className="text-lg font-medium text-primary mt-2">Mediterranean Bowl</p>
              </div>
              <Button className="bg-gradient-primary text-white">
                View Recipe
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Challenge */}
        <Card className="shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Weekly Challenge</h3>
              <span className="text-sm text-primary font-medium">4/7 days</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Eat 5 servings of vegetables daily
            </p>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-primary h-2 rounded-full transition-all duration-300" style={{ width: '57%' }} />
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;