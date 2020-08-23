import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";

function Calendar1() {
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  return (
    <div className='mypage-body'>
        <div className='body-wrapper box'>
            <div className='calendar-wrapper'>
            <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={[
          { id:'a', title: 'event 1', start: '2019-04-01' },
          { id:'b', title: 'event 2', start: '2019-04-02' }
        ]}
      />
                
                
            </div>

        </div>
      
    </div>
  );

  
  

}

export default Calendar1;
