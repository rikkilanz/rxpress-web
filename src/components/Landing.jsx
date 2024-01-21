import { stockImage1, stockImage2, rxPressThumb } from "../assets";
import Header from "./Header";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="flex">
          <div className="basis-[50%] p-8 flex flex-col justify-center text-[16px]">
            <h1 className="font-playfair text-[48px] font-bold leading-tight">
              Prescription pickup made easy.
            </h1>
            <p className="mt-4">
              We bring your medications right to your doorstep, ensuring you
              have more time for what truly matters - your health.
            </p>
          </div>
          <div className="basis-[50%] h-full block">
            <img
              src={stockImage1}
              alt=""
              className="h-full w-full object-cover"
              style={{ maxHeight: "100%" }}
            />
          </div>
        </div>
      </section>
      <section className="mt-4" id="benefits">
        <h2 className="font-playfair text-[64px] font-bold leading-tight text-center text-primary my-8">
          Why use RxPress?
        </h2>
        <ul className="flex justify-center gap-8 pb-12 px-8">
          <li className="p-8 shadow-md rounded-lg basis-[33%]">
            <h3 className="font-playfair font-medium text-3xl">
              Reduced wait times
            </h3>
            <p className="mt-4">
              We believe that everyone should have easy access to their
              medications. Our user-friendly platform allows you to order
              prescriptions with a few simple clicks, providing a seamless
              experience for all.
            </p>
          </li>
          <li className="p-8 shadow-md rounded-lg basis-[33%]">
            <h3 className="font-playfair font-medium text-3xl">Accessible</h3>
            <p className="mt-4">
              We believe that everyone should have easy access to their
              medications. Our user-friendly platform allows you to order
              prescriptions with a few simple clicks, providing a seamless
              experience for all.
            </p>
          </li>
          <li className="p-8 shadow-md rounded-lg basis-[33%]">
            <h3 className="font-playfair font-medium text-3xl">
              Local support
            </h3>
            <p className="mt-4">
              We understand the importance of personalized service, and that's
              why we're here to answer your questions, address your concerns,
              and ensure you feel supported throughout your healthcare journey.
            </p>
          </li>
        </ul>
      </section>
      <section className="min-h-[500px] mt-8" id="hero">
        <div className="flex">
          <div className="basis-[50%] h-full shadow-md rounded-lg">
            <img
              src={rxPressThumb}
              alt=""
              className="h-full w-full object-cover"
              style={{ maxHeight: "100%" }}
            />
          </div>
          <div className="basis-[50%] p-8 flex flex-col justify-center text-[16px]">
            <h1 className="font-playfair text-[48px] font-bold leading-tight">
              Simplifying the prescription process for everyone.
            </h1>
            <p className="mt-4">
              Experience the convenience of managing your prescriptions with
              just a few clicks. With advanced tracking and notification
              features, RxPress puts your health first, making prescription
              delivery hassle-free and efficient.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
