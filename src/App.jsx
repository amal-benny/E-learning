import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import MyCourse from "./components/MyCourse";
import Courses from "./components/Courses";
import Header from "./globals/Header";
import Footer from "./globals/Footer";
import ViewCourse from "./components/ViewCourse";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <div className="min-h-screen flex flex-col">
          <Header isLoggedIn={isLoggedIn} />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-course" element={<MyCourse />} />{" "}
              <Route path="/course" element={<Courses />} />
              <Route path="/view-course" element={<ViewCourse />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>

          <Footer />
        </div>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
