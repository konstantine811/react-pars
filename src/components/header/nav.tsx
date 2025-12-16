import { Link } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";
import HandLogo from "../icons/hand-logo";
import LetterAnimation from "../txt-animation/letter-animation";
import { RoutePath } from "../../config/route-config";

const Nav = () => {
  return (
    <nav className="w-full z-50 border-b border-white/5 bg-[#050507]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to={RoutePath.HOME}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <HandLogo />
            <div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="brand-font text-xl text-white tracking-widest pt-1">
            <LetterAnimation duration={2.5} letterDelay={0.15} delay={0.5}>
              ПАРС
            </LetterAnimation>
          </span>
        </Link>

        <Link
          to={RoutePath.ORACLE}
          className="brand-font bg-white/5 hover:bg-yellow-900/20 border border-white/10 hover:border-yellow-600/50 text-zinc-200 hover:text-yellow-500 text-xs px-8 py-3 transition-all tracking-[0.2em] uppercase flex items-center gap-2 group"
        >
          <span>Розрахунок</span>
          <ChevronRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
