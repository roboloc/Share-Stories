import { signIn } from "@/auth";
/* ---------------------------------- NOTES --------------------------------- */
//akun yang ada di backendless untuk sign in ke web share stories
//user hanya rafif@gmail.com
//dengan password google
export default function SignIn() {
  return (
    <main className="min-h-screen bg-cyan-50 grid place-items-center">
      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
        className="grid"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            User Login
          </h2>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Input your email here"
            name="email"
            className="drop-shadow-white mb-4 border-2 border-zinc-100 rounded w-full py-2 px-3 text-gray-700 leading-tight "
          />
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Input your password here"
            name="password"
            className="drop-shadow-white  mb-8  border-2 border-zinc-100 rounded w-full py-2 px-3 text-gray-700 leading-tight "
          />
          <button
            type="submit"
            className="bg-blue-600  hover:bg-blue-700 flex justify-self-center text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Sign In
          </button>
        </div>
      </form>
    </main>
  );
}
