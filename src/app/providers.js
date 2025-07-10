"use client";

import React from "react";
import dynamic from "next/dynamic";

const Annotorious = dynamic(
  () => import("@annotorious/react").then((mod) => mod.Annotorious),
  { ssr: false }
);

export default function Providers({ children }) {
  return <Annotorious>{children}</Annotorious>;
}