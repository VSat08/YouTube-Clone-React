import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Transition } from "@headlessui/react";

function IntroModal({ show, onHide }) {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md w-5/6 ">
          <h1 className="text-2xl font-bold mb-4 text-white">Disclaimer</h1>
          <p className="text-white text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg ">
            By using the YouTube-Clone project, I acknowledge and agree to
            comply with the following terms and conditions concerning copyright
            and anti-plagiarism. The "YouTube-Clone" project is a software
            application that emulates certain features of the YouTube platform.
            It is important to recognize that all copyrights and ownership of
            content displayed or shared through the project belong to the
            Youtube and not me.
            <br />
            <br />
            As a owner of the YouTube-Clone project, I affirm that I will not
            engage in any form of acquiring credit for Youtube Services, as the
            Original credits goes to{" "}
            <a href="https://www.youtube.com/" className="text-blue-400">
              Youtube Ltd.
            </a>{" "}
            <strong>
              <u>
                Its just a mere Project showcasing a clone which extracts the
                data from Youtube through Api.{" "}
              </u>
            </strong>
            Furthermore, I agree that I will not participate in any acts of
            plagiarism or unauthorized use of copyrighted material within the
            YouTube-Clone project. I intent not to violate any copyright or
            intellectual property rights of others. I encourage users to respect
            the intellectual property rights of others.
            <br />
            <br />
            In the event that you believe any content displayed or shared within
            the YouTube-Clone project infringes upon your copyright or
            constitutes plagiarism, please contact us immediately. I will
            investigate such claims promptly and take appropriate action, which
            may include removing or disabling access to the allegedly infringing
            or plagiarized content.
            <br />
            <br />
            By using the YouTube-Clone project, I, Satyam Verma acknowledge that
            I agree to abide by the terms and conditions stated herein. If you
            have any questions or concerns regarding copyright or plagiarism
            issues or this disclaimer, please contact us at{" "}
            <a href="mailto:" className="text-blue-400">
              satyam2001verma@gmail.com
            </a>
          </p>
          <button
            className="bg-red-700 w-full text-white py-2 px-4  my-5 rounded "
            onClick={onHide}
          >
            Close
          </button>
        </div>
      </div>
    </Transition>
  );
}

const App = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AppContext>
        {showModal && (
          <IntroModal show={showModal} onHide={() => setShowModal(false)} />
        )}
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route path="/" exact element={<Feed />} />
              <Route
                path="/searchResult/:searchQuery"
                element={<SearchResult />}
              />
              <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </>
  );
};

export default App;
