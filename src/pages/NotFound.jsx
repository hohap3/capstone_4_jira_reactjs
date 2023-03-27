import React from "react";
import NotFoundImg from "assets/image_processing20200228-8141-me8m7m.jpg";

function NotFound() {
  return (
    <section className="notFound">
      <img src={NotFoundImg} className="h-screen w-full object-contain" alt="not found picture" />
    </section>
  );
}

export default NotFound;
