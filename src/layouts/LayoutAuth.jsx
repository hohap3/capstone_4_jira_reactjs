import React, { useEffect, useRef, useState } from "react";

function LayoutAuth({ children }) {
  const [{ width, height }, setResize] = useState({
    width: Math.trunc(window.innerWidth),
    height: Math.trunc(window.innerHeight),
  });
  const imageRef = useRef();

  const randomId = Math.trunc(Math.random() * 100);

  useEffect(() => {
    function handleResize() {
      setResize({
        width: Math.trunc(window.innerWidth),
        height: Math.trunc(window.innerHeight),
      });
    }

    function handleErrorImage(e) {
      const { target } = e;
      const defaultImageLink = `https://placehold.co/${Math.trunc(width / 2)}${Math.trunc(
        height / 2
      )}`;

      target.src = defaultImageLink;
    }

    window.addEventListener("resize", handleResize);
    if (imageRef.current) imageRef.current.addEventListener("error", handleErrorImage);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (imageRef.current) imageRef.current.removeEventListener("error", handleErrorImage);
    };
  }, []);

  return (
    <section className="auth">
      <div className="auth__container container mx-auto">
        <div className="auth__content flex">
          <div className="auth__image hidden w-[60%] md:block">
            <img
              ref={imageRef}
              src={`https://picsum.photos/id/${randomId}/${Math.trunc(width / 2)}/${Math.trunc(
                height / 2
              )}.jpg`}
              className="w-full h-[100vh]"
            />
          </div>
          <div className="auth__auth w-[40%] flex flex-col gap-6 justify-center px-[2rem] bg-slate-50">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LayoutAuth;
