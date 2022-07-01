import "./Note.css";
import { useState } from "react";

export const Note = ({ title, note, meta, color }) => {
  return (
    <div className="card note" style={{ backgroundColor: color }}>
      <div className="card__header">
        <h2 className="card__title h--3">{title}</h2>
      </div>
      <div className="card__image">
        <p className="text text--left m--0 m__r-1 m__l-1">{note}</p>
      </div>
      <div className="flex justify--between p--1 date text--left text--bold">
        {meta.time} {meta.date}
      </div>
      <div className="card__dismiss bg--transparent color--neutral">
        <span className="p--0-5 pin flex flex--center">
          <i className="bx bx-pin"></i>
        </span>
      </div>
      <NoteMenu />
    </div>
  );
};

export const NoteMenu = () => {
  return (
    <div className="notemenu justify--evenly">
      <span className="p--1 menu__button">
        <i className="bx bxs-trash"></i>
      </span>
      <span className="p--1 menu__button">
        <i className="bx bxs-archive"></i>
      </span>
      <span className="p--1 menu__button">
        <i className="bx bxs-pencil"></i>
      </span>
    </div>
  );
};
