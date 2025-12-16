import { Link, useLocation } from "react-router-dom";
import HandLogo from "../icons/hand-logo";
import LetterAnimation from "../txt-animation/letter-animation";
import { RoutePath } from "../../config/route-config";
import Button from "../button/Button";

const Nav = () => {
  const location = useLocation();
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

        {location.pathname === RoutePath.HOME ? (
          <Button variant="outline" type="link" to={RoutePath.ORACLE}>
            Розрахунок
          </Button>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
