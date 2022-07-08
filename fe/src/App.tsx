import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Stats from "./pages/Stats";

function App() {
  return (
    // <div className="w-full h-full dark:bg-slate-800 overflow-auto">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="stats" element={<Stats />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    // </div>
  );
}

export default App;
