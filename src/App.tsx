import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AirplaneCursor from "./components/AirplaneCursor";
import BlogAdmin from "./components/pages/BlogAdmin";
import BlogForm from "./components/pages/BlogForm";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/globals.css";
import LatestBlogs from "./components/pages/LatestBlogs";
import BlogDetail from "./components/pages/BlogDetail";

function HomePage() {
  return (
    <>
      <AirplaneCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <LatestBlogs />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />

        {/* Protected Blog Admin */}
        <Route
          path="/admin/blog"
          element={
            <ProtectedRoute>
              <BlogAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blog/create"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blog/edit/:id"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
