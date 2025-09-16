import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <Phone size={16} className="mr-2 text-teal-600" />
          <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <Mail size={16} className="mr-2 text-teal-600" />
          <span className="text-sm text-gray-600">hello@digitalgrow.com</span>
        </div>
        <div className="flex items-center">
          <MapPin size={16} className="mr-2 text-teal-600" />
          <span className="text-sm text-gray-600">
            123 Business St, Suite 100
            <br />
            New York, NY 10001
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
