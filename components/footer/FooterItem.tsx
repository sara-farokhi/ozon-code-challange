import React from "react";

interface Props {
  name: string;
  caption: string;
}

const FooterItem = ({ name, caption }: Props) => {
  return (
    <div className="footer-item">
      <i className={`${name}`}></i>
      <span className="footer-item-caption">{caption}</span>
    </div>
  );
};

export default FooterItem;
