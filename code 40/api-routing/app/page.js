'use client'
import Image from "next/image";

export default function Home() {
  const HandleClick = async () => {
    let data = {
      name: "Vinit",
      role: "Coder",
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
  }
  return (
    <div>
      <h1 className="textxl font-bold">Next.js app api route</h1>
      <button onClick={HandleClick}>Click me</button>
    </div>
  );
}
