// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Article from "./article";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <PopularClients />
      <Resume />
      <Article />
      <ContactForm />
      <Footer />
    </>
  );
}
