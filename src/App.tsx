import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AirplaneCursor from "./components/AirplaneCursor";
import BlogAdmin from "./components/BlogAdmin";
import BlogForm from "./components/BlogForm";

import "./styles/globals.css";

function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <AirplaneCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="/admin/blog/create" element={<BlogForm />} />
        <Route path="/admin/blog/edit/:id" element={<BlogForm />} />
      </Routes>
    </BrowserRouter>
  );
}
