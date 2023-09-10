
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { Alert, Calendar } from 'antd';

interface Event {
  startTime: string;
  endTime: string;
  description: string;
}

interface EventsByDay {
  [date: string]: Event[];
}

const CalendarApp: React.FC = () => {
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());

  const eventsByDay: EventsByDay = {
    '2023-09-15': [
      {
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        description: 'LoL Practice',
      },
      {
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        description: 'Valorant Practice',
      },
    ],
    '2023-09-16': [
      {
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        description: 'LoL Practice',
      },
      {
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        description: 'Valorant Practice',
      },
    ],
    // insert database in this format
  };

  const dateCellRender = (date: Dayjs) => {
    const dateStr = date.format('YYYY-MM-DD');
    const events = eventsByDay[dateStr];

    return (
      <div>
        {events && (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                {`${event.startTime} - ${event.endTime}: ${event.description}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} /> */}
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} dateCellRender={dateCellRender} />
    </>
  );
};

export default CalendarApp;
