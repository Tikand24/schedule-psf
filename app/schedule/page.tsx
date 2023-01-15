'use client';

import { ReactElement, useEffect, useState } from 'react';
import { events } from '../../constants';
import dayjs from 'dayjs';
import { EventSchedule } from '../../typings/Event';
import CardTimeLineEvent from '../../components/CardTimeLineEvent';
import BtnDate from '../../components/BtnDate';

interface State {
  eventSelected: EventSchedule | null;
  dateSelected:string|null;
  dates: string[];
}
const Schedule = (): ReactElement => {
  const [eventSelected, setEventSelected] =
    useState<State['eventSelected']>(null);
    const [dateSelected, setDateSelected] =
      useState<State['dateSelected']>(null);
  const [dates, setDates] = useState<State['dates']>([]);

  useEffect(() => {
    const datesPar: string[] = [];
    for (let i = 4; i >= 1; i--) {
      datesPar.push(dayjs().subtract(i, 'd').format('YYYY-MM-DD'));
    }
    for (let i = 0; i < 20; i++) {
      datesPar.push(dayjs().add(i, 'd').format('YYYY-MM-DD'));
    }
    setDates(datesPar);
  }, []);
  const handleClickBtnDate = (e: string) => {
    setDateSelected(e);
    const find = events.find(evt=>dayjs(evt.date).format('YYYY-MM-DD') == dayjs(e).format('YYYY-MM-DD'));
    if(find){
      setEventSelected(find);
    }else{
      setEventSelected(null);
    }
  };
  return (
    <div className="min-h-[90vh]">
      <div className="flex flex-col items-center justify-center">
        <div className="my-8 mx-4 text-2xl font-semibold">
          {eventSelected?.title}
        </div>
      </div>
      <div className="overflow-x-auto flex pb-3">
        {dates.map((d, index) => (
          <div className="flex-none" key={`btnDateSchedule2${index}`}>
            <BtnDate dateSelected={dateSelected} eventDate={d} onClickBtn={()=>handleClickBtnDate(d)}/>
          </div>
        ))}
      </div>
      <div className='mt-10'>
      {eventSelected?.events.map((evts, index) => (
        <CardTimeLineEvent
          key={`CardTimeLineEvent${evts.id}`}
          event={evts}
          fadeInType={index % 2 == 0 ? 'left' : 'right'}
        />
      ))}
      </div>
      {eventSelected ? (
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center mt-32">
          No existen eventos
        </div>
      )}
    </div>
  );
};
export default Schedule;
