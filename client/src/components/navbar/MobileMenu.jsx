import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <NavLinks onClick={onClose} />
        <UserMenu />
      </div>
    </motion.div>
  );
}

export default MobileMenu;
