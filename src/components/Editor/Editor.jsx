import "./Editor.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = ({ editorDispatch }) => {
  const [value, setValue] = useState("");
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
        <input className="input h--3" placeholder="Add a Title" />
        <div className="flex flex--center quick-actions">
          <Link to="">
            <i className="bx bxs-pin p--y-0 p--x-1"></i>
          </Link>
          <Link to="">
            <i className="bx bxs-palette p--y-0 p--x-1"></i>
          </Link>
          <Link to="">
            <i className="bx bxs-purchase-tag p--y-0 p--x-1"></i>
          </Link>
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
      <div className="flex justify--end items--center editor__actions p--y-0-5">
        <button className="btn btn--link" onClick={() => editorDispatch(false)}>
          Cancel
        </button>
        <button className="btn btn--primary border--primary p--0-5 p--x-1">
          Save
        </button>
      </div>
    </form>
  );
};
