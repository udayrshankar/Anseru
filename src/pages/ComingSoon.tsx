import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Background from '../components/Background';
import SmartCTA from '../components/SmartCTA';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to
    // 45 days from now
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 45); 
    const targetTime = countDownDate.getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col w-full">
      {/* Hero Section Wrapper - Contains Background and Main Content */}
      <div className="relative flex-grow flex flex-col w-full overflow-hidden">
        {/* Background Layer - Scoped to Hero Section */}
        <div className="absolute inset-0 z-0 p-4 sm:p-8 md:p-10 pointer-events-none">
           <div className="w-full h-full rounded-[40px] sm:rounded-[50px] overflow-hidden relative">
              <Background />
           </div>
        </div>

        {/* Content Layer (Header + Main) */}
        <div className="relative z-10 flex flex-col flex-grow">
          <Header />
          
          <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-40 pb-20">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-medium mb-4">
                  Coming Soon
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
                  Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Amazing</span> is Coming
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
                  Our first pilot case study with a mid-market enterprise.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
              </div>

              <div className="pt-12 flex justify-center">
                 <SmartCTA />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer Section - Outside of Hero/Background */}
      <div className="relative z-20 bg-white">
          <Footer />
      </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100 min-w-[100px] md:min-w-[140px] shadow-sm">
    <span className="text-4xl md:text-5xl font-bold text-slate-900 tab-num">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-sm md:text-base text-purple-600 font-medium mt-2 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export default ComingSoon;
