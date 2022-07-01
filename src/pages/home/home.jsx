import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "components/Sidebar/sidebar";

import { notebookIcon } from "assets";
import { Editor } from "components/Editor/Editor";
export const Home = () => {
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
          <Editor />
        </section>
      </main>
    </>
  );
};
