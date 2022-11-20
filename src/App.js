import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import NewsPage from './components/NewsPage';
import StoryPage from './components/StoryPage';
import CategoryPage from "./components/CategoryPage";
import CategoriesListPage from "./components/CategoriesListPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NewsPage />} />
        <Route path='/:id' element={<StoryPage />} />
        <Route path='/categories' element={<CategoriesListPage />} />
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
