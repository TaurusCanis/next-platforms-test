"use client" 

import { VerticalPositionRelativeFrom } from "docx";
import { useState } from "react";

export default function Home() {

  const handleClick = async (method: string, router: string, data?: string) => {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (method === "POST") {
      options.body = JSON.stringify({ data });
    }
    const url = router === "app" ? "/api" : "/api/test";
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Test App Router Route Handlers</h2>
        <button onClick={() => handleClick("GET", "app")}>GET</button>
        <button onClick={() => handleClick("POST", "app")}>POST (no data)</button>
        <button onClick={() => handleClick("POST", "app", "Developer!")}>POST (with data)</button>
      </div>
      <div>
        <h2>Test Pages Router API Routes</h2>
        <button onClick={() => handleClick("GET", "pages")}>GET</button>
        <button onClick={() => handleClick("POST", "pages")}>POST (no data)</button>
        <button onClick={() => handleClick("POST", "pages", "Developer!")}>POST (with data)</button>
      </div>
    </main>
  )
}
