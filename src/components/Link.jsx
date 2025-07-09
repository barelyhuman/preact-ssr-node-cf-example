import { useLocation } from "preact-iso";

export const Link = ({ to, children, ...props }) => {
  const loc = useLocation();
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        loc.route(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
};
