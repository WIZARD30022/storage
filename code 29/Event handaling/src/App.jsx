import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState("first");
  const [form, setform] = useState({ name: "", phone: "" });

  const handleclick = () => {
    alert("Hey I am clicked.");
  };

  const handleMouseOver = () => {
    alert("I am a MouseOver");
  };

  const handlechange = (e) => {
    setname(e.target.value);
  };

  const handleformNamechange = (e) => {
    setform(form.name = e.target.value)
  }

  const handleformPhonechange = (e) => {
    setform(form.phone = e.target.value)
  }

  const handle = (e) => {
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click on me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        Hey I am a red box.
      </div>

      <div className="input">
        <input type="text" value={name} onChange={handlechange} />

        <input type="text" name="name" value={form.name} onChange={/*handleformNamechange*/ handle} />
        <input type="number" name="phone" value={form.phone} onChange={/*handleformPhonechange*/ handle} />
      </div>
    </>
  );
}

export default App;
