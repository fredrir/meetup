const JoinSchedule = () => {
  return (
    <form>
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
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Join Meeting
      </button>
    </form>
  );
};

export default JoinSchedule;
