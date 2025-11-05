import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter } from "react-router-dom";
import Navabar from "./component/Navabar";
import Home from "./component/Home";
import Paste from "./component/Paste";
import Viewpaste from "./component/Viewpaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navabar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navabar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navabar />
        <Viewpaste />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
