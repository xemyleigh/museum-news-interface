import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actions as openedCategoryActions } from "../slices/openedCategorySlice";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector(
    (state) => state.categoriesInfo.categories
  );
  const categoriesIds = useSelector((state) => state.categoriesInfo.ids);
  const categories = categoriesIds.map((id) => categoriesData[id]);

  const openCategoryHandler = (data) => () => {
    dispatch(openedCategoryActions.setOpenedCategory(data));
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="p-3">
        <Container className="gap-5">
          <Link to="/" className="navbar-brand">
            Новости музея
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Главная
              </Link>
              <NavDropdown
                title="Категории"
                id="basic-nav-dropdown"
                className="m-0 p-0"
              >
                {categories.map(({ id, name, slug }, index) => (
                  <div key={id}>
                    <Link
                      to={`/categories/${slug}`}
                      className="dropdown-item p-2"
                      key={id}
                      onClick={openCategoryHandler({ id, name })}
                    >
                      {name}
                    </Link>
                    {index !== categories.length - 1 && (
                      <NavDropdown.Divider className="m-0" />
                    )}
                  </div>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <div className="border-top border-4 d-flex  justify-content-center">
        <div className="m-3">
          GitHub: <a href="https://github.com/xemyleigh">xemyleigh</a>
        </div>
      </div>
    </>
  );
};

export default Layout;
