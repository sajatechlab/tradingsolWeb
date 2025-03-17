
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-['IBM_Plex_Mono'] font-bold text-[24px] leading-[0px] tracking-[-0.1px] align-middle">
          TradingSolutions
        </Link>
        <div className="flex space-x-2">
          <Button variant="outline" className="bg-white text-trading-blue hover:bg-white/90 rounded-full h-[28px] w-[95px] px-[10px] py-[4px] text-sm">
            Log In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
