import { createContext, useContext, useEffect, useRef, useState } from "react";

const VisibilityContext = createContext();

export const useVisibility = () => useContext(VisibilityContext);

export const VisibilityProvider = ({ children }) => {
  const about = useRef();
  const skills = useRef();
  const projects = useRef();
  const contact = useRef();

  useEffect(() => {
    window.addEventListener("scroll", abouttHandler);
    return () => window.removeEventListener("scroll", abouttHandler);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", skillsHandler);
    return () => window.removeEventListener("scroll", skillsHandler);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", projectsHandler);
    return () => window.removeEventListener("scroll", projectsHandler);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", contactHandler);
    return () => window.removeEventListener("scroll", contactHandler);
  }, []);

  const abouttHandler = () => {
    if (about != null) {
      if (
        window.pageYOffset + window.innerHeight >=
        about?.current?.offsetTop
      ) {
        console.log(`about is now visible`);
      }
    }
  };

  const skillsHandler = () => {
    if (skills != null) {
      if (
        window.pageYOffset + window.innerHeight >=
        skills?.current?.offsetTop
      ) {
        console.log(`skills is now visible`);
      }
    }
  };

  const projectsHandler = () => {
    if (projects != null) {
      if (
        window.pageYOffset + window.innerHeight >=
        projects?.current?.offsetTop
      ) {
        console.log(`projects is now visible`);
      }
    }
  };

  const contactHandler = () => {
    if (contact != null) {
      if (
        window.pageYOffset + window.innerHeight >=
        contact?.current?.offsetTop
      ) {
        console.log(`contact is now visible`);
      }
    }
  };

  return (
    <VisibilityContext.Provider value={{ about, skills, projects }}>
      {children}
    </VisibilityContext.Provider>
  );
};
