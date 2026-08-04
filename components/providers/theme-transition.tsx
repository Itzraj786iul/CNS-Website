"use client";

import * as React from "react";

function ThemeTransition() {
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");

    return () => {
      root.classList.remove("theme-transition");
    };
  }, []);

  return null;
}

export { ThemeTransition };
