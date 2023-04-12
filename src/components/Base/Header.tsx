import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const menuList = ["가디언 테일즈"];

  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <div className={"flex flex-row px-8 py-4 bg-main"}>
      <div className={"title-4 text-sub-1 mr-16"}>BlackGarlic</div>
      <div className={"flex flex-row flex-1 items-center"}>
        {menuList.map((menu, index) => (
          <button
            className={classNames(
              "h-7 mx-2 sub-title-2",
              selectedMenu === index
                ? "text-sub-2 border-b-2 border-sub-2"
                : " text-sub-1"
            )}
          >
            {menu}
          </button>
        ))}
      </div>
      <div className={""}></div>
    </div>
  );
};

export default Header;
