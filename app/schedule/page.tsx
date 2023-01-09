'use client';

import { ReactElement, useState } from 'react';
import { events } from '../../constants';
import dayjs from 'dayjs';
import { EventSchedule } from '../../typings/Event';
import CardTimeLineEvent from '../../components/CardTimeLineEvent';

interface State {
  eventSelected: EventSchedule | null;
}
const Schedule = (): ReactElement => {
  const [eventSelected, setEventSelected] =
    useState<State['eventSelected']>(null);

  return (
    <div className='min-h-[90vh]'>
      <div className="flex flex-col items-center justify-center">
        <div className="my-8 mx-4 text-2xl font-semibold">
          {eventSelected?.title}
        </div>
        {events.map((ev) => (
          <div
            key={`dates${ev.id}`}
            onClick={() => setEventSelected(ev)}
            className={`${
              eventSelected
                ? 'bg-primary-blue text-white border-white'
                : 'bg-white text-primary-blue border-primary-blue'
            }  cursor-pointer rounded-lg shadow-2xl shadow-primary-blue/50 hover:shadow-primary-blue w-16 h-16 flex flex-col items-center justify-center  font-bold`}
          >
            <div>{dayjs(ev.date).format('MMM')}</div>
            <div>{dayjs(ev.date).format('MM')}</div>
          </div>
        ))}
      </div>
      {eventSelected?.events.map((evts) => (
        <CardTimeLineEvent key={`CardTimeLineEvent${evts.id}`} event={evts} />
      ))}
      {
        eventSelected ? (<></>):(<div className='flex flex-col items-center justify-center mt-32'>No existen eventos</div>)
      }
    </div>
  );
};
export default Schedule;
