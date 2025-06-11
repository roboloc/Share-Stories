import Link from "next/link";

export default function Services() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FBFBFB] p-4 ">
      <div className="bg-gray rounded-xl shadow-xl p-6 sm:p-8 max-w-5xl w-full text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div
            className="bg-gray-50 rounded-lg p-6 border border-gray-200
          flex flex-col items-center text-center
           transform hover:scale-105 transition duration-300 shadow-mdr"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              1. Tell Your Story Basic
            </h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Ideal for new storytellers to get started.
            </p>
            <ul className="list-none text-gray-700 space-y-2 mb-6">
              <li className="flex items-center justify-center">
                ✅ Up to 15 uploads
              </li>
              <li className="flex items-center justify-center">
                ✅ Up to 50 pages
              </li>
            </ul>
            <Link
              className="w-full py-2 px-4 bg-gray-200 text-gray-800 hover:bg-gray-400 font-semibold rounded-lg 
              opacity-80 ease-in-out"
              href="/service/service-detail/basic"
            >
              Learn More
            </Link>
          </div>

          <div
            className="bg-blue-50 rounded-lg p-6 border border-blue-200 flex flex-col items-center text-center
           transform hover:scale-105 transition duration-300 shadow-md"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-3">
              2. Tell Your Story Regular
            </h3>
            <p className="text-blue-600 mb-4 flex-grow">
              Expand your narrative with more capacity.
            </p>
            <ul className="list-none text-blue-700 space-y-2 mb-6">
              <li className="flex items-center justify-center">
                ✅ Up to 30 uploads
              </li>
              <li className="flex items-center justify-center">
                ✅ Up to **100 pages**
              </li>
            </ul>
            <Link
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 ease-in-out"
              href="/service/service-detail/regular"
            >
              Select Regular
            </Link>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 shadow-md ring-2 ring-purple-500">
            <h3 className="text-2xl font-bold text-purple-800 mb-3">
              3. Tell Your Story Premium
            </h3>
            <p className="text-purple-600 mb-4 flex-grow">
              Unlock your full storytelling potential!
            </p>
            <ul className="list-none text-purple-700 space-y-2 mb-6">
              <li className="flex items-center justify-center">
                ✅ Up to 50 uploads
              </li>
              <li className="flex items-center justify-center">
                ✅ Up to 200 pages
              </li>
              <li className="flex items-center justify-center text-purple-900 font-semibold">
                ⭐ Premium highlights in an ad!
              </li>
            </ul>
            <Link
              className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700
             text-white font-bold rounded-lg transition duration-300 ease-in-out"
              href="/service/service-detail/premium"
            >
              Go Premium!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
