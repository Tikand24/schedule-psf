import { ReactElement } from 'react';
import { EventDaySchedule } from '../typings/Event';
import dayjs from 'dayjs';

interface Prop {
  event: EventDaySchedule;
}

const CardTimeLineEvent = ({ event }: Prop): ReactElement => {
  return (
    <div className="flex px-3 mt-2 mb-4 pt-1 pb-2">
      <div className="w-32 px-4 flex flex-col items-center">
        <div className="text-[10px] font-bold text-primary-blue">
          {dayjs(event.date).format('H:mm A')}
        </div>
        <div className="h-full border-r-2 border-primary-blue my-1"></div>
      </div>
      <div className="grow px-4 pb-8">
        <div className="font-bold text-xl pb-2">{event.locationName}</div>
        <div className="text-slate-500 pt-2">{event.info}</div>
        <div className="text-slate-400 pt-1 text-xs">Como llegar</div>
      </div>
    </div>
  );
};
export default CardTimeLineEvent;
