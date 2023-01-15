'use client';

import dayjs from 'dayjs';
import { MouseEventHandler, ReactElement } from 'react';
import 'dayjs/locale/es';
dayjs.locale('es');
interface Props {
  onClickBtn?: MouseEventHandler<HTMLDivElement> | undefined;
  dateSelected: string|null;
  eventDate: string;
}

const BtnDate = ({
  onClickBtn,
  dateSelected,
  eventDate,
}: Props): ReactElement => {
  const isSelected = dateSelected
    ? dayjs(dateSelected).format('YYYY-MM-DD') ==
      dayjs(eventDate).format('YYYY-MM-DD')
    : false;
  return (
    <div
      onClick={onClickBtn}
      className={`${
        isSelected
          ? 'bg-primary-blue text-white border-white'
          : 'bg-white text-primary-blue border-primary-blue'
      }  cursor-pointer rounded-lg shadow-2xl shadow-primary-blue/50 hover:shadow-primary-blue w-16 h-16 mx-2 flex flex-col items-center justify-center  font-bold`}
    >
      <div className="capitalize">{dayjs(eventDate).format('MMM')}</div>
      <div>{dayjs(eventDate).format('DD')}</div>
    </div>
  );
};
export default BtnDate;
