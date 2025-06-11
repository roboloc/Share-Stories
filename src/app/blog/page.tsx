import Image from "next/image";
import Link from "next/link";

export default async function blog() {
  const response = await fetch(
    "https://mightyneck-us.backendless.app/api/data/articles",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  console.log(data);
  return (
    <>
      <main className="min-h-screen bg-[#FBFBFB] p-4">
        <button
          className="mt-4 px-4 py-2 flex justify-self-center  bg-blue-600 rounded-md hover:bg-blue-700
         transition-colors duration-200 "
        >
          <Link className="text-3xl text-white" href="/blog/create-blog">
            Create Blog
          </Link>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-8">
          {data.map(
            (
              item: {
                title: string;
                image: string;
                content: string;
                author: string;
                created: string;
              },
              index: number
            ) => {
              const createdDate: Date = new Date(item.created);

              const formattedDate = createdDate.toLocaleDateString("en-US");
              return (
                <article key={index} className="bg-white rounded-lg shadow-lg ">
                  <div className="w-full h-48 relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image}
                      alt="city"
                      fill
                      className="object-cover"
                    ></Image>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {item.content}
                    </p>
                    <button
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
                       transition-colors duration-200"
                    >
                      Read More
                    </button>
                    <div>
                      <hr className="mt-5 mb-5"></hr>
                      <p className="font-semibold text-gray-800">
                        - {item.author}
                      </p>
                      <p className="text-gray-500">{formattedDate}</p>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </main>
    </>
  );
}
