import { useSelector } from "react-redux";

const CategoriesListPage = () => {
  const categories = useSelector((state) => state.categoriesInfo.categories);
  return (
    <>
      <h1>list</h1>
    </>
  );
};

export default CategoriesListPage;
