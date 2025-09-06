import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MobileLayout } from '@/components/Layout/MobileLayout';
import { MessageCircle, Star, Calendar, Clock, Video, Phone } from 'lucide-react';

const nutritionists = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Weight Management',
    rating: 4.9,
    reviews: 124,
    availability: 'Available Today',
    image: '/placeholder.svg',
    price: '$80/session',
    expertise: ['Weight Loss', 'Diabetes Management', 'Sports Nutrition']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Sports Nutrition',
    rating: 4.8,
    reviews: 98,
    availability: 'Next Available: Tomorrow',
    image: '/placeholder.svg',
    price: '$75/session',
    expertise: ['Athletic Performance', 'Muscle Building', 'Recovery Nutrition']
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Plant-Based Nutrition',
    rating: 4.9,
    reviews: 156,
    availability: 'Available Today',
    image: '/placeholder.svg',
    price: '$70/session',
    expertise: ['Vegan Diets', 'Digestive Health', 'Meal Planning']
  }
];

const upcomingAppointments = [
  {
    date: 'Today, 3:00 PM',
    nutritionist: 'Dr. Sarah Johnson',
    type: 'Video Call',
    topic: 'Weight Loss Progress Review'
  }
];

const Consultation = () => {
  return (
    <MobileLayout>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Consultation</h1>
          <p className="text-muted-foreground">
            Connect with certified nutritionists and dietitians
          </p>
        </div>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.map((appointment, index) => (
              <Card key={index} className="shadow-soft border-0 bg-gradient-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Video className="h-4 w-4 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {appointment.type}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {appointment.topic}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        with {appointment.nutritionist}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.date}</span>
                      </div>
                    </div>
                    <Button className="bg-gradient-primary text-white">
                      Join Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Available Nutritionists */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Available Nutritionists</h2>
          <div className="space-y-4">
            {nutritionists.map((nutritionist) => (
              <Card key={nutritionist.id} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={nutritionist.image} alt={nutritionist.name} />
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {nutritionist.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{nutritionist.name}</h3>
                          <p className="text-sm text-primary">{nutritionist.specialty}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">{nutritionist.price}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-warning fill-current" />
                          <span className="text-sm font-medium">{nutritionist.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({nutritionist.reviews} reviews)
                        </span>
                        <Badge 
                          variant={nutritionist.availability.includes('Today') ? 'default' : 'secondary'}
                          className={nutritionist.availability.includes('Today') ? 'text-white bg-success' : ''}
                        >
                          {nutritionist.availability}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {nutritionist.expertise.slice(0, 2).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {nutritionist.expertise.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{nutritionist.expertise.length - 2} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-gradient-primary text-white">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Session
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <Card className="shadow-soft border-0">
          <CardHeader>
            <CardTitle>Need Immediate Help?</CardTitle>
            <CardDescription>
              Get quick answers to common nutrition questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span className="text-sm">Chat Support</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-sm">Emergency Line</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Consultation;