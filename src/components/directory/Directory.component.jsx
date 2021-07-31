import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem.component";
import directory from "./directory.data";

function Directory() {
  const [sections, setSections] = useState(directory);

  return (
    <div className="w-full flex flex-wrap justify-between">
      {sections.map((section) => {
        return <MenuItem key={section.id} {...section} />;
      })}
    </div>
  );
}

export default Directory;
