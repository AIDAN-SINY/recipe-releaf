import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-healthy-food.jpg';

const features = [
  {
    icon: Heart,
    title: 'Personalized Nutrition',
    description: 'Get meal plans tailored to your health goals and preferences',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Connect with certified nutritionists and dietitians',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor your health journey with detailed analytics',
  },
];

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="relative px-6 pt-16 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Healthy Eating
            <br />
            <span className="text-accent">Made Easy</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Transform your relationship with food through personalized nutrition guidance and expert support.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-glow mb-8">
          <img 
            src={heroImage} 
            alt="Fresh healthy foods including vegetables, fruits, and wholesome meals"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="space-y-4">
          <Link to="/auth/login">
            <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg py-6">
              Get Started
            </Button>
          </Link>
          <Link to="/auth/signup">
            <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 font-semibold text-lg py-6">
              Create Account
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 pb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Why Choose Our App?
        </h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-white/95 backdrop-blur-sm border-0 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;