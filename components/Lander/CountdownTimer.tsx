"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date('2024-01-21T12:00:00-05:00').getTime(); // EST
const END_DATE = new Date('2024-02-19T12:00:00-05:00').getTime(); // EST

export function getTotalDays() {
  const now = Date.now();
  if (now < START_DATE) {
    return Math.ceil((END_DATE - START_DATE) / (1000 * 60 * 60 * 24));
  }
  if (now > END_DATE) {
    return 0;
  }
  return Math.ceil((END_DATE - now) / (1000 * 60 * 60 * 24));
}

export default function CountdownTimer() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // If we're before the start date, count down to start
  if (now < START_DATE) {
    const difference = START_DATE - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return (
      <span className="inline-block">
        Starts in: {days}d {hours.toString().padStart(2, '0')}h {minutes.toString().padStart(2, '0')}m {seconds.toString().padStart(2, '0')}s
      </span>
    );
  }

  const difference = END_DATE - now;
  
  if (difference <= 0) {
    return <span className="inline-block">Ended</span>;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return (
    <span className="inline-block">
      {days}d {hours.toString().padStart(2, '0')}h {minutes.toString().padStart(2, '0')}m {seconds.toString().padStart(2, '0')}s
    </span>
  );
} 