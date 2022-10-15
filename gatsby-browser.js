import React from "react";
import RootLayout from "./src/components/RootLayout";

// The "Root" React Element is built by Gatsby. 
export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>;
};
