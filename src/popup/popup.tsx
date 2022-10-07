import React, { useState, useEffect } from "react";
import "../assets/tailwind.css";

const Popup = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    chrome.storage.sync.set({ name }, () => {
      console.log(`Name is set to ${name}`);
    });
  };

  useEffect(() => {
    chrome.storage.sync.get(["name"], (res) => {
      console.log(`Your name is ${res.name}`);
    });
  }, []);

  return (
    <div className="h-screen">
      <form
        className="flex justify-center items-center py-44"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="bg-gray ring-black px-4 py-4"
          placeholder="Enter your name"
        />
        <button
          type="submit"
          className="py-4 px-3 bg-indigo-500 text-white m-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Popup;
