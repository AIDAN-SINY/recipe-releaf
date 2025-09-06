import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { MobileLayout } from '@/components/Layout/MobileLayout';
import { 
  Bell, 
  Shield, 
  Globe, 
  HelpCircle, 
  MessageSquare, 
  LogOut, 
  Moon, 
  Volume2,
  Smartphone,
  Mail,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    mealReminders: true,
    progressUpdates: true,
    consultationAlerts: true,
    weeklyReports: false,
    marketing: false
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    sounds: true,
    pushNotifications: true
  });

  const settingSections = [
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { key: 'mealReminders', label: 'Meal Reminders', description: 'Get notified about upcoming meals' },
        { key: 'progressUpdates', label: 'Progress Updates', description: 'Weekly progress summaries' },
        { key: 'consultationAlerts', label: 'Consultation Alerts', description: 'Appointment reminders' },
        { key: 'weeklyReports', label: 'Weekly Reports', description: 'Detailed nutrition reports' },
        { key: 'marketing', label: 'Marketing', description: 'Promotional offers and tips' }
      ]
    }
  ];

  const quickActions = [
    { icon: Shield, label: 'Privacy Policy', description: 'How we protect your data' },
    { icon: HelpCircle, label: 'Help & Support', description: 'FAQs and contact support' },
    { icon: MessageSquare, label: 'Feedback', description: 'Share your thoughts with us' },
    { icon: Globe, label: 'About', description: 'App version and information' }
  ];

  return (
    <MobileLayout>
      <div className="px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Customize your app experience
          </p>
        </div>

        {/* App Preferences */}
        <Card className="mb-6 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              App Preferences
            </CardTitle>
            <CardDescription>Customize your app experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="darkMode" className="font-medium">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                </div>
              </div>
              <Switch
                id="darkMode"
                checked={preferences.darkMode}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, darkMode: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="sounds" className="font-medium">Sounds</Label>
                  <p className="text-sm text-muted-foreground">App notification sounds</p>
                </div>
              </div>
              <Switch
                id="sounds"
                checked={preferences.sounds}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, sounds: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="pushNotifications" className="font-medium">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications on device</p>
                </div>
              </div>
              <Switch
                id="pushNotifications"
                checked={preferences.pushNotifications}
                onCheckedChange={(checked) => 
                  setPreferences(prev => ({ ...prev, pushNotifications: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="mb-6 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>Choose what notifications you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {settingSections[0].items.map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <Label htmlFor={item.key} className="font-medium">{item.label}</Label>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <Switch
                  id={item.key}
                  checked={notifications[item.key as keyof typeof notifications]}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, [item.key]: checked }))
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Account */}
        <Card className="mb-6 shadow-soft border-0">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="ghost" className="w-full justify-between h-auto p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div className="text-left">
                  <p className="font-medium">Email Preferences</p>
                  <p className="text-sm text-muted-foreground">Manage email notifications</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Button>

            <Button variant="ghost" className="w-full justify-between h-auto p-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div className="text-left">
                  <p className="font-medium">Data Export</p>
                  <p className="text-sm text-muted-foreground">Download your data</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Button>
          </CardContent>
        </Card>

        {/* Support & Information */}
        <Card className="mb-6 shadow-soft border-0">
          <CardHeader>
            <CardTitle>Support & Information</CardTitle>
            <CardDescription>Get help and learn more about the app</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {quickActions.map((action, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                className="w-full justify-between h-auto p-4"
              >
                <div className="flex items-center gap-3">
                  <action.icon className="h-5 w-5 text-muted-foreground" />
                  <div className="text-left">
                    <p className="font-medium">{action.label}</p>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* App Version */}
        <Card className="mb-8 shadow-soft border-0">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Healthy Eating Made Easy</p>
            <p className="text-xs text-muted-foreground">Version 1.0.0</p>
          </CardContent>
        </Card>

        {/* Sign Out */}
        <Button 
          variant="outline" 
          className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </MobileLayout>
  );
};

export default Settings;