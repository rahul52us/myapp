import React from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';

const CalendarTimeline = () => {
  // Example data for the timeline
  const groups = [
    { id: 1, title: 'Group 1' },
    { id: 2, title: 'Group 2' },
  ];

  const items = [
    { id: 1, group: 1, title: 'Item 1', start_time: new Date(2023, 4, 1), end_time: new Date(2023, 4, 5) },
    { id: 2, group: 2, title: 'Item 2', start_time: new Date(2023, 4, 3), end_time: new Date(2023, 4, 10) },
  ];

  const timelineStyle = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const groupRenderer = ({ group }) => {
    return (
      <div>
        <span style={{ fontWeight: 'bold' }}>{group.title}</span>
      </div>
    );
  };

  const itemRenderer = ({ item }) => {
    return (
      <div>
        <span style={{ color: 'blue' }}>{item.title}</span>
      </div>
    );
  };

  return (
    <div style={timelineStyle}>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={new Date(2023, 4, 1)}
        defaultTimeEnd={new Date(2023, 4, 30)}
        groupRenderer={groupRenderer}
        itemRenderer={itemRenderer}
      />
    </div>
  );
};

export default CalendarTimeline;
