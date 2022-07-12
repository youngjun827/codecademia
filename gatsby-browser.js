import React from "react";
import RootLayout from "./src/components/RootLayout";

export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>;
};
