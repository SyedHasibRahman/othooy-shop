import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import { useContext, useState } from "react";
import ROLE from "../common/role";
import Context from "../context";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";
import logo from "../assets/banner/logov2.png";

// menu start
export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Services",
    link: "/service",
  },
  {
    id: 3,
    name: "Products",
    link: "/products",
  },
];
// menu end

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { user } = useSelector((state) => state.user);

  // console.log("Redux user in Header:", user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40 dark:bg-gray-900 dark:text-white duration-200">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={ "/" }>
            <img height={ 60 } width={ 100 } src={ logo } alt="logo" />
          </Link>
        </div>
        {/* <div>
          <DarkMode />
        </div> */}
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none bg-white dark:bg-gray-900 dark:text-white duration-200"
            onChange={ handleSearch }
            value={ search }
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch cursor="pointer" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              { MenuLinks.map(({ id, name, link }) => (
                <li key={ id } className="py-4">
                  <NavLink
                    to={ link }
                    activeClassName="text-primary border-b-2 border-primary"
                    className="text-lg font-medium hover:text-primary py-2 transition-colors duration-500"
                  >
                    { name }
                  </NavLink>
                </li>
              )) }
            </ul>
          </nav>
          <div className="relative  flex justify-center">
            { user?._id && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={ () => setMenuDisplay((prev) => !prev) }
              >
                { user?.profilePic ? (
                  <img
                    src={ user?.profilePic }
                    className="w-10 h-10  rounded-full"
                    alt={ user?.name }
                  />
                ) : (
                  <FaRegCircleUser />
                ) }
              </div>
            ) }

            { menuDisplay && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded  dark:bg-gray-900 dark:text-white duration-200">
                <nav>
                  { user?.role === ROLE.ADMIN && (
                    <Link
                      to={ "admin-panel/all-products" }
                      className="whitespace-nowrap  md:block hover:bg-slate-100 p-2  dark:bg-gray-900 dark:text-white duration-200"
                    //className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2  dark:bg-gray-900 dark:text-white duration-200"
                    >
                      Admin Panel
                    </Link>
                  ) }
                </nav>
              </div>
            ) }
          </div>

          { user?._id && (
            <Link to={ "/cart" } className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{ context?.cartProductCount }</p>
              </div>
            </Link>
          ) }

          <div>
            { user?._id ? (
              <button
                onClick={ handleLogout }
                className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to={ "/login" }
                className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Login
              </Link>
            ) }
          </div>
          <div>
            <DarkMode />
          </div>
          {/* Mobile view Drawer */ }
          <div className="flex items-center gap-4 md:hidden ">
            { showMenu ? (
              <HiMenuAlt1
                onClick={ toggleMenu }
                className="cursor-pointer transition-all"
                size={ 30 }
              />
            ) : (
              <HiMenuAlt3
                onClick={ toggleMenu }
                className="cursor-pointer transition-all"
                size={ 30 }
              />
            ) }
          </div>
        </div>

        <ResponsiveMenu showMenu={ showMenu } />
      </div>
    </header>
  );
};

export default Header;
