'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { notices, specialHours } from '@/data/notices';
import '@/styles/Contact.css';

const PopularTimes = () => {
    // Initialize selectedDate to midnight today
    const [selectedDate, setSelectedDate] = useState(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    });

    // Current time for "Currently Open" check
    const now = new Date();

    // Normalized "today" for date comparisons
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);

    // Date Limits: Past 7 days and Future 7 days
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 7);

    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 7);

    // Derived State
    const dateString = selectedDate.toLocaleDateString('en-CA');
    const closureInfo = notices.find(notice => notice.closureDate === dateString);
    const specialHoursInfo = specialHours.find(special => special.date === dateString);

    // Get operating hours ranges
    const getOperatingRanges = (date: Date, special: typeof specialHoursInfo) => {
        if (special) {
            return special.ranges;
        }

        const day = date.getDay(); // 0 = Sun, 6 = Sat

        // Mon (1): Closed
        if (day === 1) return [];

        // Tue (2) - Fri (5): 6PM (18) - 11PM (23)
        if (day >= 2 && day <= 5) return [{ open: 18, close: 23 }];

        // Sat (6): 5PM (17) - 12AM (24)
        if (day === 6) return [{ open: 17, close: 24 }];

        // Sun (0): 5PM (17) - 10PM (22)
        return [{ open: 17, close: 22 }];
    };

    const ranges = getOperatingRanges(selectedDate, specialHoursInfo);

    // Flatten ranges into a single array of hours for the chart
    const hoursList: { hour: number; type: string }[] = [];
    ranges.forEach(range => {
        for (let i = range.open; i < range.close; i++) {
            hoursList.push({ hour: i, type: range.type || 'regular' });
        }
    });
    hoursList.sort((a, b) => a.hour - b.hour);

    // Generate deterministic "random" data based on the date string
    const generateDataForDate = (date: Date, hours: typeof hoursList, isClosed: boolean) => {
        if (isClosed) return hours.map(() => 0);

        const day = date.getDay();
        const dateStr = date.toDateString();

        // Base busyness based on day of week
        let baseBusyness = 50;
        if (day === 5 || day === 6) baseBusyness = 85; // Fri/Sat are busy
        if (day === 0) baseBusyness = 65; // Sunday moderate

        // Seeded random function for consistent data per date
        const seed = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

        return hours.map((item) => {
            const hour = item.hour;
            // Check if this hour is within any open range
            const isOpen = ranges.some(range => hour >= range.open && hour < range.close);
            if (!isOpen) return 0;

            // Peak time usually around 7-8 PM (19-20)
            let hourModifier = 0;
            if (hour >= 19 && hour <= 20) hourModifier = 20;

            // Check if it's an opening or closing hour in any range
            const isEdge = ranges.some(r => r.open === hour || r.close === hour + 1);
            if (isEdge) hourModifier = -20;

            // Pseudo-random variation based on seed and hour
            const randomVar = Math.sin(seed + hour) * 15;

            const value = baseBusyness + hourModifier + randomVar;
            return Math.min(Math.max(Math.floor(value), 10), 100); // Clamp between 10 and 100
        });
    };

    const chartData = generateDataForDate(selectedDate, hoursList, !!closureInfo);

    const isToday = selectedDate.getTime() === today.getTime();
    const currentHour = now.getHours();

    // Check if selected date is in the past
    const isPast = selectedDate < today;

    const handlePrevDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() - 1);
        newDate.setHours(0, 0, 0, 0);

        if (newDate >= minDate) {
            setSelectedDate(newDate);
        }
    };

    const handleNextDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + 1);
        newDate.setHours(0, 0, 0, 0);

        if (newDate <= maxDate) {
            setSelectedDate(newDate);
        }
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    };

    const formatTime = (hour: number) => {
        if (hour === 24) return '12 AM';
        if (hour === 12) return '12 PM';
        return hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
    };

    const formatHourLabel = (hour: number) => {
        if (hour === 24) return '12:00 AM';
        if (hour === 12) return '12:00 PM';
        return hour > 12 ? `${hour - 12}:00 PM` : `${hour}:00 AM`;
    };

    const getStatusMessage = () => {
        if (closureInfo) return `Closed: ${closureInfo.title}`;

        if (selectedDate.getDay() === 1) return "Closed on Mondays";

        if (isPast) return `Past attendance for ${formatDate(selectedDate)}`;
        if (!isToday) return `Expected attendance for ${formatDate(selectedDate)}`;

        // Check current status against ranges
        for (const range of ranges) {
            if (currentHour >= range.open && currentHour < range.close) {
                return "Currently Open";
            }
            if (currentHour < range.open) {
                return `Opens at ${formatTime(range.open)}`;
            }
        }
        return "Closed";
    };

    // Disable buttons based on limits
    const isPrevDisabled = selectedDate.getTime() <= minDate.getTime();
    const isNextDisabled = selectedDate.getTime() >= maxDate.getTime();

    // Check if it's a closed day (Monday or Special Closure)
    const isClosedDay = !!closureInfo || selectedDate.getDay() === 1;

    return (
        <div className="popular-times-widget" style={{ borderColor: 'rgba(196, 30, 58, 0.3)' }}>
            <div className="widget-header">
                <div className="widget-title">
                    <Users size={20} color="#c41e3a" />
                    <h3 style={{ color: '#f0f0f0' }}>The Gathering</h3>
                </div>
                <div className="date-navigation">
                    {!isPrevDisabled ? (
                        <button
                            onClick={handlePrevDay}
                            className="nav-btn"
                            aria-label="Previous day"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    ) : <div style={{ width: '32px' }} />}

                    <span className="current-date">{formatDate(selectedDate)}</span>

                    {!isNextDisabled ? (
                        <button
                            onClick={handleNextDay}
                            className="nav-btn"
                            aria-label="Next day"
                        >
                            <ChevronRight size={20} />
                        </button>
                    ) : <div style={{ width: '32px' }} />}
                </div>
            </div>

            <div className="chart-container">
                <div className="chart-bars" style={{ gap: '4px' }}>
                    {chartData.map((value, index) => {
                        const item = hoursList[index];
                        const hour = item.hour;
                        const type = item.type;
                        const isCurrentHour = isToday && hour === currentHour;

                        // Check for gap
                        const isGap = index > 0 && hour !== hoursList[index - 1].hour + 1;

                        // Determine bar color
                        const activeColor = type === 'special' ? '#2196f3' : '#c41e3a';
                        const inactiveGradient = type === 'special'
                            ? 'linear-gradient(to top, rgba(33, 150, 243, 0.2), rgba(33, 150, 243, 0.6))'
                            : 'linear-gradient(to top, rgba(196, 30, 58, 0.2), rgba(196, 30, 58, 0.6))';

                        return (
                            <div key={hour} className="bar-wrapper" style={{
                                minWidth: '40px',
                                marginLeft: isGap ? '20px' : '0'
                            }}>
                                <motion.div
                                    className={`bar ${isCurrentHour ? 'active' : ''}`}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${value}%` }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    title={`${formatTime(hour)}: ${value}% busy`}
                                    style={{
                                        background: isCurrentHour ? activeColor : inactiveGradient
                                    }}
                                />
                                <span className="hour-label" style={{
                                    fontSize: '0.65rem',
                                    transform: 'rotate(-45deg)',
                                    marginTop: '8px',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {formatHourLabel(hour)}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="widget-footer">
                <p style={{ color: isClosedDay ? '#FFD700' : 'inherit', fontWeight: isClosedDay ? 'bold' : 'normal' }}>{getStatusMessage()}</p>
            </div>
        </div>
    );
};

export default PopularTimes;
