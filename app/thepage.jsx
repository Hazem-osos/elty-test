'use client';

import { useState } from "react";

export default function PageSelector() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selectedPages, setSelectedPages] = useState([]);
  const allSelected = selectedPages.length === pages.length;

  const togglePage = (page) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const toggleAll = () => {
    setSelectedPages(allSelected ? [] : pages);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 w-120 shadow-lg rounded-lg border bg-white flex flex-col items-center text-black border-gray-300 shadow-gray-500/50">
        <label className="flex items-center justify-between pb-2 border-b border-gray-300 w-full cursor-pointer">
          <span className="text-lg">All pages</span>
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            className="w-5 h-5 cursor-pointer"
          />
        </label>
        <div className="py-3 w-full">
          {pages.map((page) => (
            <label key={page} className="flex items-center justify-between py-2 w-full cursor-pointer">
              <span className="text-md">{page}</span>
              <input
                type="checkbox"
                checked={selectedPages.includes(page)}
                onChange={() => togglePage(page)}
                className="w-5 h-5 cursor-pointer"
              />
            </label>
          ))}
        </div>
        <div className="border-t border-gray-300 w-full mt-2"></div>
        <button className="w-full bg-yellow-400 mt-4 py-4 rounded-2xl text-black  text-lg shadow-md hover:bg-yellow-300 cursor-pointer">
          Done
        </button>
      </div>
    </div>
  );
}