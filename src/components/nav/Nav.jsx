import { tabs } from "@/components/common/data";
import GooeyNav from "@/components/magicui/nav-gooey";

const Nav = ({ className }) => {
  return (
  <GooeyNav
    items={tabs}
  />
  );
};

export default Nav;
