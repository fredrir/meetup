import { useState, useEffect, useRef } from "react";

const SingleScheduler = ({ onClose }: { onClose: () => void }) => {
  const [isRangeMode, setIsRangeMode] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
      >
        <button
          type="button"
          className="absolute right-2 top-2 rounded-full bg-gray-200 p-2 px-3 text-gray-600 hover:bg-gray-300"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-4 text-xl font-semibold">Schedule a Meeting</h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Meeting Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="mode"
              className="block text-sm font-medium text-gray-700"
            >
              Is the date set or a range?
            </label>
            <select
              id="mode"
              name="mode"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              onChange={(e) => setIsRangeMode(e.target.value === "range")}
            >
              <option value="single">Set</option>
              <option value="range">Range</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              {isRangeMode ? "Start date" : "Date"}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
          {isRangeMode && (
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              {isRangeMode ? "Min start time" : "Start time"}
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="endTime"
              className="block text-sm font-medium text-gray-700"
            >
              {isRangeMode ? "Max end time" : "End time"}
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Meeting
        </button>
      </div>
    </form>
  );
};

export default SingleScheduler;
