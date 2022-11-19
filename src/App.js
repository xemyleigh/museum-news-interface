import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Router
} from "react-router-dom";
import NewsPage from './components/NewsPage';
import StoryPage from './components/StoryPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:id' element={<StoryPage />} />
    </Routes>
    </>
  );
}

export default App;
