import { useState } from "react";
import { Sidebar, Navbar, Note, Editor } from "components";
import { notebookIcon } from "assets";
// import { notes } from "backend/db/notes";
import { useAuth } from "contexts/auth-context";
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const { authData, setAuthData } = useAuth();
  const { encodedToken } = authData;
  const [notes, setNotes] = useState([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const openEditor = (titleToSet, noteToSet, activeColorToSet) => {
    setTitle(titleToSet);
    setNote(noteToSet);
    setActiveColor(activeColorToSet);
    setIsEditorOpen(true);
  };

  const getNotes = () => {
    (async () => {
      const response = await axios.get("/api/notes", {
        headers: {
          authorization: encodedToken,
        },
      });
      setNotes(response.data.notes);
    })();
  };

  useEffect(() => {
    getNotes();
  }, [notes]);

  return (
    <>
      <Navbar />
      <main className="flex m__t-1 p__b--2 justify--center">
        <Sidebar />

        <section className="content flex flex__wrap--wrap p--x-2">
          {notes.length === 0 && !isEditorOpen && (
            <img
              src={notebookIcon}
              alt="notebook-icon"
              className="hero-img"
              onClick={() => setIsEditorOpen(true)}
            ></img>
          )}
          {isEditorOpen && (
            <Editor
              editorDispatch={setIsEditorOpen}
              title={title}
              note={note}
              activeColor={activeColor}
              setNotes={setNotes}
            />
          )}
          <div className="grid--four">
            {!isEditorOpen &&
              notes.map((note) => (
                <Note
                  title={note.title}
                  note={note.note}
                  meta={note.meta}
                  color={note.color}
                  key={note.id}
                  openEditor={openEditor}
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
