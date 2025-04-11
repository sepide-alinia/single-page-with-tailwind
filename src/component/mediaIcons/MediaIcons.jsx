import React from "react";

export default function MediaIcons({icon,class1}) {
  return (
    <div className={` text-white p-2 transition border rounded-full mr-3 hover:text-primary_1 hover:border-primary_1 ${class1}`}>
      {icon}
    </div>
  );
}
