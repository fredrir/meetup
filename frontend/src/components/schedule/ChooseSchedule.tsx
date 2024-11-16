import { useState } from "react";
import MultiScheduler from "./MultiScheduler";
import SingleScheduler from "./SingleScheduler";
import { Calendar, Users, CalendarCheckIcon } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

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
        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-lg bg-white p-6 shadow-md"
        >
          {meetingType === "single" && <SingleScheduler />}

          {meetingType === "multi" && <MultiScheduler />}

          {meetingType === "join" && (
            <>
              <h2 className="mb-4 text-xl font-semibold">Join a Meeting</h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="meetingId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Meeting ID
                  </label>
                  <input
                    type="text"
                    id="meetingId"
                    name="meetingId"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              </div>
            </>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {meetingType === "join" ? "Join Meeting" : "Schedule"}
          </button>
        </form>
      )}
    </section>
  );
};

export default ChooseSchedule;
