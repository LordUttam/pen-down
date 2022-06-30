import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "components/Sidebar/sidebar";
import { notebookIcon } from "assets";
import { notes } from "backend/db/notes";
import { Note } from "components/Note/Note";
import { Editor } from "components/Editor/Editor";

export const Home = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="flex m__t-1 p__b--2 justify--center">
        <Sidebar />

        <section className="content flex flex__wrap--wrap p--x-2">
          {/* <img
              src={notebookIcon}
              alt="notebook-icon"
              className="hero-img"
            ></img> */}
          {isEditorOpen && <Editor editorDispatch={setIsEditorOpen} />}
          <div className="grid--four">
            {!isEditorOpen &&
              notes.map((note) => (
                <Note
                  title={note.title}
                  note={note.note}
                  meta={note.meta}
                  color={note.color}
                  key={note.id}
                />
              ))}
          </div>
          {!isEditorOpen && (
            <button
              className="btn btn--float"
              onClick={() => {
                setIsEditorOpen(!isEditorOpen);
              }}
            >
              +
            </button>
          )}
        </section>
      </main>
    </>
  );
};
