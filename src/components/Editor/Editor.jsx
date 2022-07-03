import "./Editor.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Colorpicker } from "components/Colorpicker/Colorpicker";

export const Editor = ({ title = "", note = "", activeColor = "" }) => {
  const [value, setValue] = useState(note);
  const [isColorpickerOpen, setIsColorpickerOpen] = useState(false);
  const [noteColor, setNoteColor] = useState(activeColor);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { header: 1 },
        { header: 2 },
        { list: "ordered" },
        { list: "bullet" },
        { script: "super" },
        { script: "sub" },
        { indent: "-1" },
        { indent: "+1" },
        { direction: "rtl" },
      ],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "highlight",
    "blockquote",
    "code",
    "code-block",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "formula",
    "video",
    "script",
    "background",
  ];

  return (
    <form className="editor flex flex__dir--col justify--start border--accent">
      <div className="flex justify--evenly">
        <input
          className="input h--3"
          placeholder="Add a Title"
          defaultValue={title}
        />
        <div className="flex--inline flex--center quick-actions">
          <span className="w--100 h--100 flex justify--between items--center">
            <i className="bx bxs-pin p--y-0 p--x-1"></i>
          </span>
          <span className="w--100 h--100 flex justify--between items--center">
            <i className="bx bxs-purchase-tag p--y-0 p--x-1"></i>
          </span>
        </div>
      </div>
      <div className="editor__container flex flex__dir--col">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          className="editor__body"
        />
      </div>
      <div className="flex justify--between items--center editor__actions p--y-0-5">
        <div className="flex--inline flex--center text--md quick-actions">
          <span
            className="w--100 h--100 p--0-5 flex justify--between items--center colorpicker-btn"
            onClick={() => setIsColorpickerOpen(!isColorpickerOpen)}
          >
            <i className="bx bxs-palette p--y-0 p--x-1"></i>
          </span>
          {isColorpickerOpen && (
            <Colorpicker noteColor={noteColor} setNoteColor={setNoteColor} />
          )}
        </div>
        <div className="flex justify--end items--center p--0-25">
          <button className="btn btn--link m__r--2">Cancel</button>
          <button
            className="btn btn--primary border--primary p--0-5 p--x-1"
            onClick={() => saveNote(note)}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
