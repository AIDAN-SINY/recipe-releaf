import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MobileLayout } from '@/components/Layout/MobileLayout';
import { Calendar, Plus, Clock, Users } from 'lucide-react';
import { useState } from 'react';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

const sampleMeals = {
  'Mon-Breakfast': { name: 'Avocado Toast', time: '8:00 AM', calories: 320 },
  'Mon-Lunch': { name: 'Quinoa Salad', time: '12:30 PM', calories: 450 },
  'Tue-Breakfast': { name: 'Greek Yogurt Bowl', time: '8:00 AM', calories: 280 },
  'Wed-Dinner': { name: 'Grilled Salmon', time: '7:00 PM', calories: 520 },
};

const MealPlanning = () => {
  const [selectedDay, setSelectedDay] = useState('Mon');
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);

  return (
    <MobileLayout>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Meal Planning</h1>
            <p className="text-muted-foreground">Plan your weekly nutrition</p>
          </div>
          <Button className="bg-gradient-primary text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Meal
          </Button>
        </div>

        {/* Week Navigator */}
        <Card className="mb-6 shadow-soft border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">This Week</h3>
              <Badge variant="outline" className="text-primary border-primary">
                March 4-10
              </Badge>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {weekDays.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`p-3 rounded-lg text-center transition-colors ${
                    selectedDay === day
                      ? 'bg-gradient-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary'
                  }`}
                >
                  <div className="text-xs font-medium">{day}</div>
                  <div className="text-lg font-bold mt-1">
                    {4 + weekDays.indexOf(day)}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Meal Schedule */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            {selectedDay === 'Mon' ? 'Monday' : 
             selectedDay === 'Tue' ? 'Tuesday' : 
             selectedDay === 'Wed' ? 'Wednesday' : 
             selectedDay === 'Thu' ? 'Thursday' : 
             selectedDay === 'Fri' ? 'Friday' : 
             selectedDay === 'Sat' ? 'Saturday' : 'Sunday'} Schedule
          </h2>
          
          {mealTypes.map((mealType) => {
            const mealKey = `${selectedDay}-${mealType}`;
            const meal = sampleMeals[mealKey as keyof typeof sampleMeals];
            
            return (
              <Card key={mealType} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground">{mealType}</h3>
                        {meal && (
                          <Badge variant="secondary" className="text-xs">
                            {meal.calories} cal
                          </Badge>
                        )}
                      </div>
                      
                      {meal ? (
                        <div className="space-y-1">
                          <p className="text-primary font-medium">{meal.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{meal.time}</span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">No meal planned</p>
                      )}
                    </div>
                    
                    <Button 
                      variant={meal ? "outline" : "default"}
                      size="sm"
                      className={meal ? "" : "bg-gradient-primary text-white"}
                      onClick={() => setSelectedMeal(mealKey)}
                    >
                      {meal ? 'Edit' : 'Add'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Weekly Overview */}
        <Card className="mt-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Weekly Overview
            </CardTitle>
            <CardDescription>Your planned nutrition for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Meals Planned</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-success">1,650</p>
                <p className="text-sm text-muted-foreground">Avg Calories/Day</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default MealPlanning;