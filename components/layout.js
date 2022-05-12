import Nav from "./nav";
import dynamic from "next/dynamic";

const SocialIcons = dynamic(() => {
    return import("./social-icons.js");
  },
  { ssr: false }
);

const ScrollButton = dynamic(() => {
    return import("./scroll-button");
  },
  { ssr: false }
);

const Layout = ({ children, pages }) => (
  <>
    <SocialIcons />
    <Nav pages={pages} />
    <ScrollButton />
    {children}
  </>
);

export default Layout;
