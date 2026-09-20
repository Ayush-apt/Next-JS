'use client'

import { useState } from "react";

export default function Home() {
  const [test, setTest] = useState("Ashu");

  return (
    <>
      Home
      {test}
    </>
  );
}