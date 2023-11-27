import { footerItem } from "@/types";

const FooterItem = ({ name, caption }: footerItem) => {
  return (
    <div className="footer-item">
      <i className={`${name}`}></i>
      <span className="footer-item-caption">{caption}</span>
    </div>
  );
};

export default FooterItem;
