import { useState, useEffect } from 'react';

export default function GraduationCountdown() {
    const calculateTimeLeft = () => {
        const graduationDate = new Date("2025-05-30T15:00:00");
        const now = new Date();
        const difference = graduationDate - now;
        
        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    };

    const [timeLeft, setTimeLeft] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); 
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isMounted) return null;
    
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h2 className='text-2xl font-bold'>Graduation Countdown</h2>
            {timeLeft === null ? 
                <p className='text-xl py-4'>
                    0 days, 0 hours, 0 minutes, 0 seconds
                </p> 
                :
                <p className='text-xl py-4'>
                    {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
                </p>
            }
        </div>
    ); 
}