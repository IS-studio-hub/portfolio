import { Route, Routes } from "react-router-dom";
import { CustomCursor } from "../components/CustomCursor";
import { ScrollToTop } from "../components/ScrollToTop";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { ProjectPage } from "./ProjectPage";

export function Root() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
