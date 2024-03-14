import React, { useState } from "react";

export default function Contect() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitform = (e) => {
    e.preventDefault();
    const setEntry = {
      name: `${name + lastName}`,
      email: email,
      message: textArea,
    };
    setAllEntry([...allEntry, setEntry]);
  };
  return (
    <div>
      <div className="w-full mx-auto mt-5">
        <div className=" grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div className="flex items-center mt-5">
              <span className="text-sm">
                House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
              </span>
            </div>
          </div>
          <form action="" onSubmit={submitform} className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none bg-transparent border-b w-full border-indigo-500 text-gray-700 mr-3 p-4 leading-tight focus:outline-none "
                  type="text"
                  placeholder="Enter your first name"
                  aria-label="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Enter your last name"
                  aria-label="Full name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none "
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Full name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4  leading-tight focus:outline-none"
                  type="email"
                  placeholder="Enter your massage"
                  aria-label="Full name"
                  value={textArea}
                  onChange={(e) => setTextArea(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
