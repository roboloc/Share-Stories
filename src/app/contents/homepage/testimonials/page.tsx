// import Image from "next/image";
export default function Testimonials() {
  return (
    <main className="bg-[#E8F9FF] min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12
         text-black leading-tight text-shadow-sm"
        >
          What Our Visionaries Say
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-50 p-8 rounded-xl shadow-lg
           hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border
            border-gray-100"
          >
            <div className="flex items-center mb-6 relative">
              <div>
                <p className="font-semibold text-lg text-black">JK. Rowlangs</p>
                <p className="text-sm text-gray-700">Author</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-6 text-base md:text-lg">
              &quot;Share story has simplfy our book. Now, it was readible
              everywhere. The easy access, and simple interface.&quot;
            </p>
          </div>

          <div
            className="bg-gray-50  p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all 
          duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="flex items-center mb-6 relative">
              <div>
                <p className="font-semibold text-lg text-black">Tere Liam</p>
                <p className="text-sm text-gray-700">Author</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-6 text-base md:text-lg">
              &quot;Making writing a story easier and very friendly for new
              writers and new readers. Highly recommended!&quot;
            </p>
          </div>

          <div
            className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all 
          duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="flex items-center mb-6 relative">
              <div>
                <p className="font-semibold text-lg text-black">Stan Loo</p>
                <p className="text-sm text-gray-700">Author</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-6 text-base md:text-lg">
              &quot;Easy to write new stories, exiting website to be accessed
              directly and cheap alternatives to publish is exactly what
              individual writer demand.&quot;
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
