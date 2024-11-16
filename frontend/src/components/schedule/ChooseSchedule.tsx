import { useState } from "react";
import MultiScheduler from "./MultiScheduler";
import SingleScheduler from "./SingleScheduler";
import { Calendar, Users, CalendarCheckIcon } from "lucide-react";
import JoinSchedule from "./JoinSchedule";

interface ScheduleItem {
  title: string;
  description: string;
  button: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ChooseSchedule = () => {
  const [meetingType, setMeetingType] = useState<
    "single" | "multi" | "join" | null
  >(null);

  const items: ScheduleItem[] = [
    {
      title: "Schedule a Meeting",
      icon: <Calendar size={24} className="h-8 w-8 text-indigo-500" />,
      description:
        "Set your availability and let others book time with you effortlessly.",
      button: "Schedule",
      onClick: () => setMeetingType("single"),
    },
    {
      title: "Join a Meeting",
      icon: <Users size={24} className="h-8 w-8 text-green-500" />,
      description: "Connect to a meeting or event with a simple click.",
      button: "Join",
      onClick: () => setMeetingType("join"),
    },
    {
      title: "Schedule a Multi-day Event",
      icon: <CalendarCheckIcon size={24} className="h-8 w-8 text-purple-500" />,
      description:
        "Plan and organize multi-day events with ease. Share with your team.",
      button: "Schedule",
      onClick: () => setMeetingType("multi"),
    },
  ];

  return (
    <section>
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex h-full flex-col rounded-lg bg-blue-50 p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="flex-grow text-gray-600">{item.description}</p>
            <button
              onClick={item.onClick}
              className="mt-4 block rounded-full bg-blue-600 px-8 py-2 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
      {!meetingType && (
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600">
            Ready to plan your next meeting or event?
          </p>
          <p className="mt-2 text-lg font-semibold text-indigo-600">
            Choose an option above to get started on your scheduling journey!
          </p>
        </div>
      )}

      {meetingType && (
        <>
          {meetingType === "single" && (
            <SingleScheduler onClose={() => setMeetingType(null)} />
          )}
          {meetingType === "multi" && <MultiScheduler />}

          {meetingType === "join" && <JoinSchedule />}
        </>
      )}
    </section>
  );
};

export default ChooseSchedule;
