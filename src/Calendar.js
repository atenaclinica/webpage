import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth)
    });

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between mb-8">
                <button onClick={() => setCurrentMonth(prev => new Date(prev.setMonth(prev.getMonth() - 1)))}>
                    Previous
                </button>
                <h2 className="text-xl font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
                <button onClick={() => setCurrentMonth(prev => new Date(prev.setMonth(prev.getMonth() + 1)))}>
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-4">
                {daysInMonth.map(day => (
                    <div 
                        key={day} 
                        className={`p-4 border rounded-lg ${isSameMonth(day, currentMonth) ? 'text-black' : 'text-gray-400'} ${isToday(day) ? 'bg-blue-100' : ''}`}
                        onClick={() => console.log('Selected date:', day)}
                    >
                        {format(day, 'd')}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
