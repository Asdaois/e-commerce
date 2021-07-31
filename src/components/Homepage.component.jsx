import React from "react";

function Homepage() {
  return (
    <div className="flex flex-col items-center py-5 px-20">
      <div className="w-full flex flex-wrap justify-between">
        <div className="min-w-3/10 h-60 flex-auto flex items-center justify-center border border-solid border-black mt-0 mx-2 mb-4 first:mr-2 last:ml-2 ">
          <div className="h-24 px-6 py-0 flex flex-col items-center justify-center border border-solid border-black ">
            <h1 className="font-bold mb-6px text-2xl text-gray-600">HATS</h1>
            <span className="font-light text-base">SHOW NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
