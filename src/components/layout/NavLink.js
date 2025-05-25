import { NavLink as RouterNavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavLink = ({
  to,
  children,
  className,
  activeClassName = 'text-accent font-semibold border-b-2 border-accent',
  inactiveClassName = 'hover:text-accent/80 transition-colors',
  ...props
}) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        cn(isActive ? activeClassName : inactiveClassName, className)
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
