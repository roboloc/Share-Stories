export default function Mission() {
  return (
    <main
      className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] bg-[#FBFBFB] p-4 sm:p-6 lg:p-8 gap-8 lg:gap-20" // Changed to flex-col for mobile, flex-row for large screens, adjusted gap
    >
      <div className="text-center w-full max-w-lg lg:max-w-none lg:w-auto">
        <p className="text-xl sm:text-3xl font-bold text-blue-700 mb-4 mt-8 leading-tight">
          Overview
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 leading-relaxed px-4 lg:px-0">
          &quot;Our platform is build for people to share their stories for now
          and the future. Also, facilitating people to buy the stories. We
          connect storyteller with their intersting stories &quot;
        </p>
      </div>
      <div className="text-center w-full max-w-lg lg:max-w-none lg:w-auto mt-8 lg:mt-0">
        <p className="text-xl sm:text-3xl font-bold text-blue-700 mb-4 leading-tight">
          Mission
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 leading-relaxed px-4 lg:px-0">
          &quot;To empower individuals to tell their stories without any
          restriction whether is fictional or real. For people, to imagine
          theirself emerge in the stories&quot;
        </p>
      </div>
    </main>
  );
}
