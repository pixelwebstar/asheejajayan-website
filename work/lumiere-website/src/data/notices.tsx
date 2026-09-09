import { Calendar, Sparkles, Bell, Clock, Hammer } from 'lucide-react';

export interface Notice {
    id: number;
    type: string;
    icon: React.ReactNode;
    title: string;
    date: string;
    description: string;
    status: 'upcoming' | 'active' | 'past' | 'recurring';
    closureDate?: string;
}

export interface SpecialHoursRange {
    open: number;
    close: number;
    label?: string;
    type?: string;
}

export interface SpecialHours {
    date: string;
    ranges: SpecialHoursRange[];
}

export const notices: Notice[] = [
    {
        id: 7,
        type: 'Closure',
        icon: <Hammer />,
        title: 'Renovation Closure',
        date: 'November 29, 2025',
        description: 'LUMIÈRE will be closed on November 29th for scheduled renovations to enhance your dining experience. We apologize for any inconvenience.',
        status: 'upcoming',
        closureDate: '2025-11-29'
    },
    {
        id: 1,
        type: 'Holiday',
        icon: <Calendar />,
        title: 'Holiday Closure - New Year\'s Day',
        date: 'January 1, 2025',
        description: 'LUMIÈRE will be closed on New Year\'s Day to allow our staff to celebrate with their families. We will resume regular service on January 2nd.',
        status: 'upcoming',
        closureDate: '2025-01-01'
    },
    {
        id: 2,
        type: 'Event',
        icon: <Sparkles />,
        title: 'Valentine\'s Day Special Menu',
        date: 'February 14, 2025',
        description: 'Join us for an unforgettable evening of romance. Our exclusive 7-course tasting menu pairs gothic elegance with culinary artistry. Reservations required.',
        status: 'upcoming'
    },
    {
        id: 3,
        type: 'Announcement',
        icon: <Bell />,
        title: 'Extended Saturday Hours',
        date: 'Effective Immediately',
        description: 'We\'re thrilled to announce extended Saturday hours! LUMIÈRE will now be open until midnight every Saturday, offering late-night dining for night owls and romantics.',
        status: 'active'
    },
    {
        id: 4,
        type: 'Holiday',
        icon: <Calendar />,
        title: 'Thanksgiving Closure',
        date: 'November 28, 2024',
        description: 'LUMIÈRE will be closed on Thanksgiving Day. We will reopen with our regular schedule on Friday, November 29th.',
        status: 'past',
        closureDate: '2024-11-28'
    },
    {
        id: 5,
        type: 'Event',
        icon: <Sparkles />,
        title: 'Wine Tasting Evening',
        date: 'Last Friday of Every Month',
        description: 'Join our sommelier for an exclusive wine tasting experience. Discover rare vintages from gothic estates and shadowy vineyards. Limited seating.',
        status: 'recurring'
    },
    {
        id: 6,
        type: 'Announcement',
        icon: <Clock />,
        title: 'Reservations Recommended',
        date: 'Ongoing',
        description: 'Due to high demand, we strongly recommend making reservations in advance, especially for weekend dining. Walk-ins are welcome based on availability.',
        status: 'active'
    }
];

export const specialHours: SpecialHours[] = [
    {
        date: '2025-11-27',
        ranges: [
            { open: 3, close: 4, label: 'Special Guests', type: 'special' },
            { open: 5, close: 6, label: 'Open for All', type: 'special' },
            { open: 18, close: 23, label: 'Regular Hours' }
        ]
    }
];
