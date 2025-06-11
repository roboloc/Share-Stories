export default function PremiumDetail() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FBFBFB] p-4 font-sans">
      <div
        className="bg-purple-100 rounded-xl shadow-xl p-6 sm:p-8 max-w-4xl w-full     
                   grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="text-center md:text-left p-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-800 mb-6">
            Tell Your Story Premium
          </h2>
          <p className="text-base text-gray-700 mb-6 px-2 md:px-0">
            This plan will unlock the full feuture Share Stories with a much
            larger storage and more pages to write in a website. Also, an free
            ad to promote your stories.
          </p>
        </div>
        <div className="text-center md:text-right p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-6">
            <ul className="col-start-1 col-end-2 list-none text-purple-600 space-y-2 text-left">
              <li className="flex items-center">✅ Up to 50 uploads</li>
              <li className="flex items-center">✅ Up to 200 pages</li>
              <li className="flex items-center text-purple-900 font-semibold">
                ⭐ Premium highlights in an ad!
              </li>
            </ul>
            <p className="col-start-2 col-end-3 text-2xl sm:text-2xl font-bold text-black text-right">
              💲25 / Month
            </p>
          </div>
          <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300 ease-in-out">
            Buy
          </button>
        </div>
      </div>
    </main>
  );
}
