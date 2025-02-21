import { Hero } from "../../Components/Hero/Hero";
import { Services } from "../../Components/Services/Services";
import { Tours } from "../../Components/Tours/Tours";
import { Banner } from "../../Components/Banner/Banner";
import { NewsLetter } from "../../Components/NewsLetter/NewsLetter";
import { Modal } from "../../Components/ui/Modal";

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Tours />
      <Banner />
      <NewsLetter />
    </>
  );
};
