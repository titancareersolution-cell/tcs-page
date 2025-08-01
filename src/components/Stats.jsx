import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';

const statsData = [
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 28c5.523 0 10-4.477 10-10S29.523 8 24 8 14 12.477 14 18s4.477 10 10 10zm0 4c-6.627 0-20 3.343-20 10v2h40v-2c0-6.657-13.373-10-20-10z" stroke="#F44336" strokeWidth="2"/></svg>
    ),
    value: 1000,
    label: 'HAPPY STUDENTS',
    color: '#fff5f5',
    textColor: '#F44336',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="18" r="10" stroke="#2196F3" strokeWidth="2"/><path d="M24 28v12m0 0l-4-4m4 4l4-4" stroke="#2196F3" strokeWidth="2"/></svg>
    ),
    value: 9,
    label: 'YEARS OF EXCELLENCE',
    color: '#f5faff',
    textColor: '#2196F3',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="16" width="32" height="24" rx="4" stroke="#FFC107" strokeWidth="2"/><path d="M16 24h16M16 30h16" stroke="#FFC107" strokeWidth="2"/></svg>
    ),
    value: 50,
    label: 'PARTNER',
    color: '#fffde7',
    textColor: '#FFC107',
  },
];

function useCountUp(target, duration = 3000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      startVal += step;
      if (startVal >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(startVal);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration, start]);
  return count;
}

const Stats = () => {
  const [start, setStart] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-section" ref={ref}>
      {statsData.map((stat, i) => {
        const count = useCountUp(stat.value, 1200 + i * 200, start);
        return (
          <div className="stat-card" key={stat.label} style={{ background: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value" style={{ color: '#111' }}>
              <span style={{ color: stat.textColor, fontWeight: 700 }}>{count}+</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats; 