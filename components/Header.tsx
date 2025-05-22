import React from "react";
import Logo from "../public/logo.svg";

const Header = () => {
  return (
    <header className="h-1/5 ml-32">
      {/* used Logo since it's a svg */}
        <Logo className="w-32 mt-10 h-auto" />
    </header>
  );
};

export default Header;
