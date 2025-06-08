import {
  NavLink as RouterNavLink,
  type NavLinkRenderProps,
} from "react-router";

type Props = {
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: Props) => {
  return (
    <RouterNavLink
      to={to}
      className={(navProps: NavLinkRenderProps) => {
        // Here you can add your logic for animation classes
        return navProps.isActive ? "group active" : "group";
      }}
    >
      {/* Wrap inner content to share active state via group/utility classes or animation */}
      <div className="font-BakbakOne tracking-wider uppercase">{children}</div>
    </RouterNavLink>
  );
};

export default NavLink;
