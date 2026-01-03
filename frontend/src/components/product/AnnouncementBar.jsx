import { useState, useEffect } from 'react';
import { Megaphone, X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set countdown to end of day
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay - now;
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 relative animate-slide-down">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-medium">
        <Megaphone className="w-4 h-4 animate-bounce" />
        <span className="font-bold">LIMITED TIME OFFER:</span>
        <span>50% OFF + FREE SHIPPING TODAY ONLY!</span>
        <span className="hidden sm:inline">⏰ Ends in:</span>
        <div className="hidden sm:flex items-center gap-1.5">
          <span className="bg-primary-foreground text-primary px-2 py-0.5 rounded font-bold min-w-[2rem] text-center">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span>:</span>
          <span className="bg-primary-foreground text-primary px-2 py-0.5 rounded font-bold min-w-[2rem] text-center">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span>:</span>
          <span className="bg-primary-foreground text-primary px-2 py-0.5 rounded font-bold min-w-[2rem] text-center">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}