import { Route, Routes } from "react-router-dom";
import DefaultTemplate from "./components/DefaultTemplate";
import { NotFoundPage, PostPage, PostsPage } from "./pages";


function App() {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        {/* <Route path="/posts" element={<PostsPage />}> if Route tag is nested, you should use <outlet /> in parent component
          <Route path="/posts/:postId" element={<PostPage />} />
        </Route> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultTemplate>
  );
}

export default App;
