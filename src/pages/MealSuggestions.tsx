import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MobileLayout } from '@/components/Layout/MobileLayout';
import { Search, Clock, Users, Heart, Filter, Bookmark } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { name: 'All', count: 120, active: true },
  { name: 'Breakfast', count: 25, active: false },
  { name: 'Lunch', count: 35, active: false },
  { name: 'Dinner', count: 40, active: false },
  { name: 'Snacks', count: 20, active: false }
];

const recipes = [
  {
    id: 1,
    name: 'Mediterranean Quinoa Bowl',
    image: '/placeholder.svg',
    cookTime: '25 min',
    servings: 2,
    calories: 420,
    difficulty: 'Easy',
    tags: ['Vegetarian', 'High Protein', 'Gluten-Free'],
    rating: 4.8,
    saved: false
  },
  {
    id: 2,
    name: 'Grilled Salmon with Asparagus',
    image: '/placeholder.svg',
    cookTime: '20 min',
    servings: 1,
    calories: 350,  
    difficulty: 'Medium',
    tags: ['High Protein', 'Low Carb', 'Omega-3'],
    rating: 4.9,
    saved: true
  },
  {
    id: 3,
    name: 'Avocado Toast Supreme',
    image: '/placeholder.svg',
    cookTime: '10 min',
    servings: 1,
    calories: 320,
    difficulty: 'Easy',
    tags: ['Vegetarian', 'Quick', 'Healthy Fats'],
    rating: 4.6,
    saved: false
  },
  {
    id: 4,
    name: 'Green Smoothie Power Bowl',
    image: '/placeholder.svg',
    cookTime: '5 min',
    servings: 1,
    calories: 280,
    difficulty: 'Easy',
    tags: ['Vegan', 'Detox', 'Antioxidants'],
    rating: 4.7,
    saved: true
  }
];

const MealSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <MobileLayout>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Meal Suggestions</h1>
          <p className="text-muted-foreground">
            Discover healthy recipes tailored to your preferences
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={selectedCategory === category.name ? "bg-gradient-primary text-white" : ""}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Featured Recipe */}
        <Card className="mb-8 shadow-primary border-0 bg-gradient-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-gradient-warm text-white">
                Featured Recipe
              </Badge>
              <Button variant="ghost" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Rainbow Buddha Bowl
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              A colorful, nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>4 servings</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>450 cal</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-primary text-white">
              View Recipe
            </Button>
          </CardContent>
        </Card>

        {/* Recipe Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">
              Recommended for You
            </h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="shadow-soft border-0">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center">
                      <div className="text-center">
                        <Heart className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Recipe Image</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`absolute top-3 right-3 ${recipe.saved ? 'text-primary' : 'text-white'}`}
                    >
                      <Bookmark className={`h-5 w-5 ${recipe.saved ? 'fill-current' : ''}`} />
                    </Button>
                    <Badge className="absolute bottom-3 left-3 bg-black/70 text-white">
                      {recipe.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{recipe.name}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{recipe.cookTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{recipe.servings} serving{recipe.servings > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{recipe.calories} cal</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {recipe.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {recipe.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{recipe.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        ⭐ {recipe.rating} rating
                      </div>
                      <Button size="sm" className="bg-gradient-primary text-white">
                        View Recipe
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="w-full">
            Load More Recipes
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MealSuggestions;