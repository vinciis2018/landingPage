import { Routes, Route } from "react-router-dom";
// pages
import { LandingPage1, LandingPage2, Page404 } from "../pages";
import { FooterPage, NavBar } from "../components/common";

export const PublicRoutes = () => {
  return (
    <div className="webcontainer">
      <NavBar />
      <div className="main">
        <Routes>
          {/* onboarding */}
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/2" element={<LandingPage2 />} />

          <Route path="*" element={<Page404 />} />
          {/* upload */}
        </Routes>
      </div>
      <FooterPage />
      {/* <Footer /> */}
    </div>
  );
};
