import { useState } from "react";
export const Colorpicker = ({ noteColor, setNoteColor }) => {
  const colors = ["lightblue", "blanchedalmond", "carribeangreen", "#fbbc04"];

  return (
    <div className="p--0-25 flex pill colorpicker">
      {colors.map((color) => (
        <span
          className="avatar avatar--xs text--md"
          style={{ backgroundColor: color }}
          onClick={() => setNoteColor(color)}
          key={color}
        >
          {noteColor === color ? "✓" : ""}
        </span>
      ))}
    </div>
  );
};
