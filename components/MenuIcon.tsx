import React from "react";
import "./MenuIcon.css"; // Link to your CSS file

interface MenuIconProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ setIsOpen, isOpen }) => {
  return (
    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon ${isOpen ? "open" : ""}`}
      >
        <line className="line1" x1="4" y1="8" x2="20" y2="8" />
        <line className="line2" x1="4" y1="16" x2="20" y2="16" />
      </svg>
    </div>
  );
};

export default MenuIcon;
