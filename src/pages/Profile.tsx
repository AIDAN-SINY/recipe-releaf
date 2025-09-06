import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MobileLayout } from '@/components/Layout/MobileLayout';
import { Edit3, Settings, Camera, Target, Calendar, Award } from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    age: 28,
    height: 165,
    currentWeight: 68,
    targetWeight: 65,
    activityLevel: 'Moderately Active',
    dietaryPreferences: ['Vegetarian', 'Gluten-Free'],
    healthGoals: ['Weight Loss', 'Muscle Building']
  });

  const stats = [
    { label: 'Days Active', value: '45', icon: Calendar },
    { label: 'Goals Achieved', value: '8', icon: Target },
    { label: 'Achievements', value: '12', icon: Award }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic will be implemented with Supabase
    console.log('Saving profile:', profileData);
  };

  return (
    <MobileLayout>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2"
          >
            <Edit3 className="h-4 w-4" />
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
        </div>

        {/* Profile Header */}
        <Card className="mb-8 shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt={profileData.name} />
                  <AvatarFallback className="bg-gradient-primary text-white text-xl">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-primary text-white p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-3">
                    <Input
                      value={profileData.name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      className="font-semibold"
                    />
                    <Input
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      type="email"
                    />
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-1">{profileData.name}</h2>
                    <p className="text-muted-foreground mb-3">{profileData.email}</p>
                    <div className="flex gap-2">
                      <Badge className="bg-gradient-primary text-white">
                        {profileData.activityLevel}
                      </Badge>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card className="mb-8 shadow-soft border-0">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-gradient-primary/10 mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Information */}
        <Card className="mb-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle>Health Information</CardTitle>
            <CardDescription>Your physical metrics and goals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={profileData.age}
                  onChange={(e) => setProfileData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={profileData.height}
                  onChange={(e) => setProfileData(prev => ({ ...prev, height: parseInt(e.target.value) }))}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="currentWeight">Current Weight (kg)</Label>
                <Input
                  id="currentWeight"
                  type="number"
                  value={profileData.currentWeight}
                  onChange={(e) => setProfileData(prev => ({ ...prev, currentWeight: parseInt(e.target.value) }))}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                <Input
                  id="targetWeight"
                  type="number"
                  value={profileData.targetWeight}
                  onChange={(e) => setProfileData(prev => ({ ...prev, targetWeight: parseInt(e.target.value) }))}
                  disabled={!isEditing}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="mb-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle>Dietary Preferences</CardTitle>
            <CardDescription>Your food preferences and restrictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Dietary Restrictions</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.dietaryPreferences.map((pref, index) => (
                    <Badge key={index} variant="outline" className="text-primary border-primary">
                      {pref}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                      + Add
                    </Button>
                  )}
                </div>
              </div>
              
              <div>
                <Label>Health Goals</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profileData.healthGoals.map((goal, index) => (
                    <Badge key={index} variant="outline" className="text-secondary border-secondary">
                      {goal}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                      + Add
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        {isEditing ? (
          <div className="space-y-3">
            <Button onClick={handleSave} className="w-full bg-gradient-primary text-white py-6">
              Save Changes
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(false)}
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button 
            className="w-full bg-gradient-primary text-white py-6 mb-4"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        )}

        {/* Settings Link */}
        <Card className="shadow-soft border-0">
          <CardContent className="p-6">
            <Button variant="ghost" className="w-full justify-start gap-3 h-auto p-0">
              <Settings className="h-5 w-5 text-muted-foreground" />
              <div className="text-left">
                <p className="font-medium text-foreground">Settings</p>
                <p className="text-sm text-muted-foreground">App preferences and privacy</p>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default Profile;