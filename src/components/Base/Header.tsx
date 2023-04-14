import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const menuList = ["가디언 테일즈"];

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <div className={"flex flex-row px-8 py-4 bg-main"}>
      <div className={"title-4 text-sub-1 mr-16"}>BlackGarlic</div>
      <div className={"flex flex-row flex-1 items-center"}>
        {menuList.map((menu, index) => (
          <Link
            key={menu + "-" + index}
            to={`/`}
            className={classNames(
              "h-7 mx-2 sub-title-2",
              selectedMenu === index
                ? "text-sub-2 border-b-2 border-sub-2"
                : " text-sub-1"
            )}
            onClick={() => setSelectedMenu(index)}
          >
            {menu}
          </Link>
        ))}
      </div>
      <div className={""}></div>
    </div>
  );
};

export default Header;
