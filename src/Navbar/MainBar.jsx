import React from "react";
import { twMerge } from 'tailwind-merge'

function MainBar({open}) {

  

  return (
    
      <div className={twMerge('fixed lg:static h-full bg-red-600 w-0 lg:w-64 transition-all duration-300 flex-none  shadow-lg', open && 'w-full' )}>
      A
    </div>
 
  );
}

export default MainBar;
