export default function BasicDetail() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FBFBFB] p-4 font-sans">
      <div
        className="bg-gray-100 rounded-xl shadow-xl p-6 sm:p-8 max-w-4xl w-full     
                   grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="text-center md:text-left p-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Tell Your Story Basic
          </h2>
          <p className="text-base text-gray-700 mb-6 px-2 md:px-0">
            This plan is perfect for individuals looking to publish their first
            story on the webiste. It offers easy to use story uploader where
            narrative could be put efficiently and affordably
          </p>
        </div>
        <div className="text-center md:text-right p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-6">
            <ul className="col-start-1 col-end-2 list-none text-gray-700 space-y-2 text-left">
              <li className="flex items-center">✅ Up to 15 uploads</li>
              <li className="flex items-center">✅ Up to 50 pages</li>
            </ul>
            <p className="col-start-2 col-end-3 text-2xl sm:text-2xl font-bold text-blue-700 text-right">
              💲10 / Month
            </p>
          </div>
          <button
            className="w-full py-3 px-4 bg-blue-500 mt-10 text-white font-semibold rounded-lg
                       hover:bg-blue-600 transition duration-300 shadow-md block text-center"
          >
            Buy
          </button>
        </div>
      </div>
    </main>
  );
}
