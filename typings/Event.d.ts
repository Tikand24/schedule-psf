export interface EventSchedule {
  id: number;
  date: Date;
  title: string;
  events: EventDaySchedule[];
}
export interface EventDaySchedule {
  id: number;
  date: Date;
  locationName: string;
  locationCoords: string;
  info: string;
}
