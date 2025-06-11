export default function RegulerDetail() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FBFBFB] p-4 font-sans">
      <div
        className="bg-blue-100 rounded-xl shadow-xl p-6 sm:p-8 max-w-4xl w-full     
                   grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="text-center md:text-left p-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6">
            Tell Your Story Regular
          </h2>
          <p className="text-base text-gray-700 mb-6 px-2 md:px-0">
            This plan is more perfect for someone that wants to write more
            stories with a larger storage and more pages to write in a website.
          </p>
        </div>
        <div className="text-center md:text-right p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-6">
            <ul className="col-start-1 col-end-2 list-none text-blue-600 space-y-2 text-left">
              <li className="flex items-center">✅ Up to 30 uploads</li>
              <li className="flex items-center">✅ Up to 100 pages</li>
            </ul>
            <p className="col-start-2 col-end-3 text-2xl sm:text-2xl font-bold text-black text-right">
              💲20 / Month
            </p>
          </div>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 ease-in-out">
            Buy
          </button>
        </div>
      </div>
    </main>
  );
}
