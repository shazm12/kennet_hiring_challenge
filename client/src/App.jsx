import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login, Feed } from './pages';
import UserProvider from "./context/User/UserProvider";
import PostProvider from "./context/Post/PostProvider";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/feed',
    element: <Feed />
  }
])


const App = () => {
  return(
    <>

      <UserProvider>
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </UserProvider>
      
    </>
  );
}

export default App
