import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const ProductLinks: FC = () => {
  const menuItems: { label: string; route: string }[] = [
    { label: "Menu Item One", route: "#" },
    { label: "Menu Item Two", route: "#" },
    { label: "Menu Item Three", route: "#" },
  ];

  return (
    <ul className="flex flex-col gap-1">
      {menuItems.map((item) => (
        <li key={item.route} className="degen-nav-wrapper">
          <NavLink className="degen-nav-normalize flex-grow" to={item.route}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ProductLinks;