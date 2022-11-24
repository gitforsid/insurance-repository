import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShare,
  faUserGroup,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import "./Nav.scss";

interface NavProps {
  companyName: string;
}

const navItems: Array<{ item: string; route: string; icon?: IconDefinition }> =
  [
    {
      item: "Аналитика данных",
      route: "",
    },
    {
      item: "Сотрудники",
      route: "",
      icon: faUserGroup,
    },
    {
      item: "5 Проекты",
      route: "",
      icon: faShare,
    },
    {
      item: "Закупки",
      route: "",
    },
    {
      item: "Финансы",
      route: "",
    },
    {
      item: "Продажи",
      route: "",
    },
    {
      item: "Склады",
      route: "",
    },
    {
      item: "Анализ конкурентов",
      route: "",
    },
  ];

const Nav: FC<NavProps> = ({ companyName }) => {
  return (
    <div className="Nav">
      <header>
        <div className="header-icon">
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <h1 className="company-name">{companyName}</h1>
      </header>
      <div className="nav-content">
        {navItems.map(({ item, icon, route }, idx) => (
          <div key={`nav-item-${idx}`} className="nav-item">
            <div>
              {icon && (
                <span className="nav-item-icon">
                  <FontAwesomeIcon icon={icon} />
                </span>
              )}
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
