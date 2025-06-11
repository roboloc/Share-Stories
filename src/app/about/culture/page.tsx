export default function Culture() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#E8F9FF] p-4 sm:p-6 lg:p-8">
      <div className="text-center w-full max-w-4xl mx-auto">
        <p className="text-xl sm:text-3xl font-bold text-blue-700 mb-10 leading-tight">
          Our Culture
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Clean</h3>
            <p className="text-8xl">🧹</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Dynamic</h3>
            <p className="text-8xl"> 💪🏽</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Efficient</h3>
            <p className="text-8xl">⏲️</p>
          </div>
        </div>
      </div>
    </main>
  );
}
