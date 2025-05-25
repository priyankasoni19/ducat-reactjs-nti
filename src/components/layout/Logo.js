import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-3xl font-bold text-primary hover:text-primary/90 transition-colors"
    >
      NTI TECH ACADEMY <span className="text-accent">India</span>
    </Link>
  );
};

export default Logo;
