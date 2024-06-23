import React from "react";

import SideBarList from "../components/SideBarList";
const SideBar = () => {
  return (
    <div>
      <img
        className="w-10 h-10 my-3 ml-3 "
        src="https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png"
        alt=""
      />

      
        <div className="w-[90%] mx-auto mt-6">
          <SideBarList />
        </div>
       
    </div>
  );
};

export default SideBar;
