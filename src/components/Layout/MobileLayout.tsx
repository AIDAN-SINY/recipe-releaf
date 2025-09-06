import { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface MobileLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

export const MobileLayout = ({ children, showNavigation = true }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <main className="pb-20">
        {children}
      </main>
      {showNavigation && <Navigation />}
    </div>
  );
};