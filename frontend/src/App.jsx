import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="dracula">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
      <div className="bg-red-600"><p>hello</p></div>
    </div>
  );
};

export default App;
