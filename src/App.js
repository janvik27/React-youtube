import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import myStore from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage.js";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={myStore}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

/*
  -Header
  -Body
    -Side bar
      -menu items
    -Main container
      -Buttons list
      -Video container
        -Video card 
*/
