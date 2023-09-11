import React, { useState, useEffect } from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { Alert, Calendar } from 'antd';
import { sql } from '@vercel/postgres';

interface Event {
  startTime: string;
  endTime: string;
  description: string;
}

interface EventsByDay {
  [date: string]: Event[];
}

export default function CalendarApp() {
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const [eventsByDay, setEventsByDay] = useState<EventsByDay | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an HTTP GET request to your server-side API route
    fetch('/api') // Replace 'your-api-route' with the actual route you defined
      .then((response) => response.json())
      .then((data) => {
        const eventRows = data.events.rows;
        const eventsData: EventsByDay = {};

        eventRows.forEach((event) => {
          const date = event.date;
          const startTime = event.starttime;
          const endTime = event.endtime;
          const description = event.description;

          if (!eventsData[date]) {
            eventsData[date] = [];
          }
          eventsData[date].push({
            startTime,
            endTime,
            description,
          });
        });

        // Set the events data and mark loading as complete
        setEventsByDay(eventsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const dateCellRender = (date: Dayjs) => {
    const dateStr = date.format('YYYY-MM-DD');
    const events = eventsByDay?.[dateStr];

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

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or other UI element
  }

  return (
    <>
      {/* <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} /> */}
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} dateCellRender={dateCellRender} />
    </>
  );
}
