export type SingleScheduler = {
  title: string;
  mode: "single" | "range";
  description?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  startTime: string;
  endTime: string;
};
