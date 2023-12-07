import "./MenuList.css";

import MenuListItem from "./MenuListItem";

const MenuList = ({ menuItems }) => {
  return (
    <div className="menu__list">
      {menuItems?.map((item) => (
        <MenuListItem
          key={item.id}
          menuItemId={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default MenuList;
