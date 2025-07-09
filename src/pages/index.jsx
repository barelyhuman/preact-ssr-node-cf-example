import { Navbar } from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-stretch">
      <Navbar />
      <main className="flex-1">
        <section className="bg-white">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                Random Stuff to convince you everything works
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                Something witty to make it seem like we have it all figured out.
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
              <div class="h-42 w-42 rounded-full border-10 border-neutral-900">

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
