import { Link } from "react-router-dom";
import { Phone } from "lucide-react"; // icon

function UserMenu() {
  return (
    <>
      {/* Large screens: Full button */}
      <Link
        to="/contact"
        className="hidden lg:inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
        Book a Call
      </Link>

      {/* Small & Medium screens: Icon button */}
      <Link
        to="/contact"
        className="lg:hidden bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110"
        title="Book a Call">
        <Phone size={20} />
      </Link>
    </>
  );
}

export default UserMenu;
