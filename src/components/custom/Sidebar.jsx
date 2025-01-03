import React, { useState, useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Re-enable scroll
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on component unmount
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <button
        className="text-4xl text-blue-950 rounded-lg"
        onClick={toggleSidebar}
      >
        <TbMenuDeep />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-all duration-500 ease-in-out z-[9999] ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } w-[80%] md:w-1/2`}
      >
        <div className="p-4">
          {/* Close Button */}
          <div className="flex items-end w-full justify-end">
            <button
              className="mb-4 p-2 text-gray-700 hover:text-gray-900"
              onClick={toggleSidebar}
            >
              X
            </button>
          </div>
          <div className="flex justify-center flex-col">
            <div>
              <h3 className="text-black text-xl"> About Us</h3>
              <p className="paragraph">
                Royal Hindustan Travels is renowned for its reliability,
                dedication, and exceptional service. With a well-maintained
                fleet and highly skilled drivers, we ensure safe and comfortable
                journeys. Our curated tour packages, led by knowledgeable
                guides, showcase India's beauty, delivering travel experiences
                defined by trust, care, and discovery.
              </p>
            </div>
            <div>
              <h3 className="text-black text-xl mt-8">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay (Blurred) */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black transition-all duration-500 ease-in-out ${
            isOpen
              ? "bg-opacity-50 backdrop-blur-sm"
              : "bg-opacity-0 backdrop-blur-0"
          } z-[9998]`}
          onClick={toggleSidebar} // Optional: close sidebar when clicking outside
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
