"use client"
import Image from "next/image";
import {SubmitAction} from "@/action/forms"
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e) => {SubmitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="text-black mx-5" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input type="text" name="add" id="add" className="text-black mx-5" />
        </div>
        <div>
          <button className="border border-white px-3" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
