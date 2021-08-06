import React, { useState } from "react";
import MenuItem from "../menu-item/MenuItem.component";
import SECTIONS_DATA from "./directory.data";

function Directory() {
  // eslint-disable-next-line
  const [sections, setSections] = useState(SECTIONS_DATA);

  return (
    <div className="flex flex-wrap justify-between w-full">
      {sections.map(({ id, ...section }) => {
        return <MenuItem key={id} {...section} />;
      })}
    </div>
  );
}

export default Directory;
