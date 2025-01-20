"use client";

import { useEffect, useState } from "react";

// Set the start time to 7pm EST today
const getEndDate = () => {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setHours(19, 0, 0, 0); // 7pm
  
  // If it's already past 7pm today, start from tomorrow
  if (today > endDate) {
    endDate.setDate(endDate.getDate() + 1);
  }
  
  // Add 30 days
  endDate.setDate(endDate.getDate() + 30);
  return endDate;
};

const END_DATE = getEndDate();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = END_DATE.getTime() - now.getTime();
      return Math.max(0, Math.floor(difference / 1000));
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  // Pad numbers with zeros
  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <span className="inline-block">
      {pad(days)}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s
    </span>
  );
} 