import React from "react";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="relative">
          <Zap className="h-8 w-8 text-teal-600 group-hover:text-teal-700 transition-colors" />
          <div className="absolute -inset-1 bg-teal-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <span className="text-3xl ubuntu-bold font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
          Softsuites
        </span>
      </Link>
    </div>
  );
}

export default Logo;
