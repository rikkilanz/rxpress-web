import { stockImage1 } from "../assets";
import Header from "./Header";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div>
      <Header />
      <section className="min-h-[500px]" id="hero">
        <div className="flex">
          <div className="basis-[50%] p-8 flex flex-col justify-center text-[16px]">
            <h1 className="font-playfair text-[48px] font-bold leading-tight">
              Prescription pickup made easy.
            </h1>
            <p className="mt-4">
              Nullam pulvinar arcu vitae blandit tincidunt. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
            </p>
          </div>
          <div className="basis-[50%] h-full">
            <img src={stockImage1} alt="" className="relative h-[500px]" />
          </div>
        </div>
      </section>
      <section className="mt-4" id="benefits">
        <h2 className="font-playfair text-[64px] font-bold leading-tight text-center text-primary my-8">
          Why use RxPress?
        </h2>
        <ul className="flex justify-center gap-8 py-6 px-8">
          <li className="p-8 shadow-md rounded-lg">
            <h3 className="font-playfair font-medium">Reduced wait times</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li className="p-8 shadow-md rounded-lg">
            <h3 className="font-playfair font-medium">Accessible</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li className="p-8 shadow-md rounded-lg">
            <h3 className="font-playfair font-medium">Accessible</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
        </ul>
      </section>
      <section className="min-h-[500px]" id="hero">
        <div className="flex">
            <div className="basis-[50%] h-full">
              <img src={stockImage1} alt="" className="relative h-[800px]" />
            </div>
          <div className="basis-[50%] p-8 flex flex-col justify-center text-[16px]">
            <h1 className="font-playfair text-[48px] font-bold leading-tight">
              Making it easy for everyone involved.
            </h1>
            <p className="mt-4">
              Nullam pulvinar arcu vitae blandit tincidunt. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
