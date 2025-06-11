export default function App() {
  return <Hero />;
}

function Hero() {
  return (
    <main
      className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-[10vh] sm:mt-[15vh] max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-[#b1dddd] text-center leading-tight sm:leading-none">
          We empower you to tell stories 📖
        </h1>
      </div>
    </main>
  );
}
