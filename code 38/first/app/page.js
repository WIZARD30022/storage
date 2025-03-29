// "use client"
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/component/Navbar"

export default function Home() {
  // const [count, setcount] = useState(1)
  console.log("Hello vinit")
  let a = fs.readFile(".gitignore")
  a.then(e => {console.log(e.toString())})
  return (
    <div>
      <Navbar />
      {/* I am a component {count} */}
      {/* <button onClick={() => setcount( count + 1 )}>Click me</button> */}
    </div>
  );
}
