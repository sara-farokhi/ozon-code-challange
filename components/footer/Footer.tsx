import FooterItem from "./FooterItem";
import { footerItem } from "@/types";

const Footer = () => {
  const FooterItems: footerItem[] = [
    {
      name: "chat-icon",
      caption: "Chats",
    },
    {
      name: "contacts-icon",
      caption: "Contacts",
    },
    {
      name: "settings-icon",
      caption: "Settings",
    },
  ];

  return (
    <div className="footer">
      {FooterItems.map(({ name, caption }) => (
        <FooterItem name={name} caption={caption} />
      ))}
    </div>
  );
};

export default Footer;
