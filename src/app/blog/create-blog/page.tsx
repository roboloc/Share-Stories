"use client";
import { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <main className="min-h-screen bg-[#FBFBFB] flex items-center justify-center p-4">
      <form
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const res = await fetch(
              "https://mightyneck-us.backendless.app/api/data/articles",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  title: title,
                  image: image,
                  content: content,
                  author: author,
                }),
              }
            );

            if (!res.ok) {
              throw new Error("Failed to create new article");
            }

            alert("Sucessfully add new article");
          } catch (error) {
            alert(error);
          } finally {
            setTitle("");
            setImage("");
            setContent("");
            setAuthor("");
          }
        }}
      >
        <div className="grid mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-base font-semibold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md duration-200"
            placeholder="Type the article title.."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-gray-700 text-base font-semibold mb-2"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md  duration-200"
            placeholder="Type the article image URL..."
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 text-base font-semibold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            rows={4}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md duration-200 resize-none"
            placeholder="Type the article content...."
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-8">
          <label
            htmlFor="author"
            className="block text-gray-700 text-base font-semibold mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            className="w-full px-4 py-2  text-black border  border-gray-300 rounded-md duration-200"
            placeholder="Type the author's name..."
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors duration-200 text-lg shadow-md"
        >
          Post Article
        </button>
      </form>
    </main>
  );
}
