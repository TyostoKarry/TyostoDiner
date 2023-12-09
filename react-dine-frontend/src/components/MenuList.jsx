import "./MenuList.css";

import MenuListItem from "./MenuListItem";

const MenuList = ({ menuItems }) => {
  return (
    <div className="menu__list">
      {menuItems?.map((item) => (
        <MenuListItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default MenuList;
