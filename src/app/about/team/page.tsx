"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Team() {
  const [userData, setUserData] = useState<{
    results: {
      name: { first: string; last: string };
      picture: { large: string };
    }[];
  } | null>(null);

  useEffect(() => {
    async function getRandomUser() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=3");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }

    getRandomUser();
  }, []);

  console.log(userData);

  return (
    <main className="bg-[#FBFBFB] min-h-screen grid place-items-center">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm
            hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border
            border-gray-100 flex flex-col items-center text-center "
          >
            <div className="flex justify-center w-full mt-2 lg:mt-0">
              <div className="w-18 h-18 sm:w-38 sm:h-38 relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src={
                    userData?.results[0].picture.large || "/default-image.jpg"
                  }
                  alt="pitcure"
                  fill
                ></Image>
              </div>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-xl text-black">
                {userData?.results[0].name.first}{" "}
                {userData?.results[0].name.last}
              </p>
              <p className="text-sm text-gray-700 mt-1">CEO</p>
            </div>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm
            hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border
            border-gray-100 flex flex-col items-center text-center"
          >
            <div className="flex justify-center w-full mt-2 lg:mt-0">
              <div className="w-18 h-18 sm:w-38 sm:h-38 relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src={
                    userData?.results[1].picture.large || "/default-image.jpg"
                  }
                  alt="pitcure"
                  fill
                ></Image>
              </div>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-xl text-black">
                {userData?.results[1].name.first}{" "}
                {userData?.results[1].name.last}
              </p>
              <p className="text-sm text-gray-700 mt-1">CTO</p>
            </div>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm
            hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border
            border-gray-100 flex flex-col items-center text-center"
          >
            <div className="flex justify-center w-full mt-2 lg:mt-0">
              <div className="w-18 h-18 sm:w-38 sm:h-38 relative rounded-full overflow-hidden shadow-lg">
                <Image
                  src={
                    userData?.results[2].picture.large || "/default-image.jpg"
                  }
                  alt="pitcure"
                  fill
                ></Image>
              </div>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-xl text-black">
                {userData?.results[2].name.first}{" "}
                {userData?.results[2].name.last}
              </p>
              <p className="text-sm text-gray-700 mt-1">Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
