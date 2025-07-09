import { useState } from "preact/hooks";
import { Navbar } from "../components/Navbar";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-6 py-8">
        <div className="text-center mb-8">
          <p className="text-7xl font-bold text-gray-800">{count}</p>
        </div>
        <button
          className="bg-[#333] text-white px-8 py-4 rounded-md hover:bg-[#222] transition-colors duration-200 text-lg font-sans font-medium"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </main>
    </div>
  );
};

export default CounterPage;
