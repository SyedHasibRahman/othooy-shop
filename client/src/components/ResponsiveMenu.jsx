import PropTypes from "prop-types";
import { MenuLinks } from "./Header";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  const user = useSelector((state) => state?.user?.user);

  // console.log("showMenu", showMenu);
  return (
    <div
      className={ `${showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md` }
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          { user?.profilePic ? (
            <img
              src={ user?.profilePic }
              className="w-10 h-10 rounded-full"
              alt={ user?.name }
            />
          ) : (
            <FaUserCircle size={ 50 } />
          ) }

          <div>
            <h1>{ user?.name }</h1>
            <h1 className="text-sm text-slate-500">{ user?.role }</h1>
          </div>
        </div>
        {/* test component end*/ }
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            { MenuLinks.map((data) => (
              <li key={ data.name }>
                <a href={ data.link } className="mb-5 inline-block">
                  { data.name }
                </a>
              </li>
            )) }
          </ul>
        </nav>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;
