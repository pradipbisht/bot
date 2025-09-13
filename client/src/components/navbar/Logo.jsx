import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="text-2xl font-bold text-blue-900">
        DigitalGrow
      </Link>
    </div>
  );
}

export default Logo;
