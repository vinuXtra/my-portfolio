import Image from "next/image";
import Slide from "./components/Slide";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-60 bg-slate-100">
      <section className="container mx-auto h-screen grid grid-cols-10 grid-rows-10 gap-4 px-4 py-2">
        <div className="row-span-1 bg-white col-span-10 rounded-md">asdfasdf</div>
        <div className="row-span-3 bg-white col-span-3 rounded-md">asdfasdf</div>
        <div className="row-span-3 bg-white col-span-3 rounded-md">asdfasdf</div>
        <div className="row-span-3 col-span-1 flex flex-col justify-stretch w-full basis-3 gap-4">
          <div className="bg-white basis-1/3 rounded-md">asdfasdf</div>
          <div className="bg-white basis-1/3 rounded-md">asdfasdf</div>
          <div className="bg-white basis-1/3 rounded-md">asdfasdf</div>
        </div>
        <div className="row-span-4 bg-white col-span-3 rounded-md">asdfasdf</div>
        <div className="row-span-4 bg-white col-span-7 rounded-md">asdfasdf</div>
        <div className="row-span-3 bg-white col-span-3 rounded-md">asdfasdf</div>
        <div data-mask={true} className="row-span-1 col-span-10 flex justify-between items-center gap-4 overflow-x-clip">
          <Slide index={-100} dir={"left"}/>
        </div>
        <div data-mask={true} className="row-span-1 col-span-10 flex justify-between items-center gap-4 overflow-x-clip">
        <Slide index={75} dir={"right"}/>
        </div>
      </section>
    </main>
  );
}
