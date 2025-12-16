import { SparklesIcon } from "lucide-react";
import Button from "../../components/button/Button";
import { RoutePath } from "../../config/route-config";

const FirstSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 text-center mb-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_80s_linear_infinite] pointer-events-none -z-10 opacity-30">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-zinc-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-zinc-800 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_50s_linear_infinite_reverse] pointer-events-none -z-10 opacity-30"></div>

      <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border-y border-yellow-500/20">
        <SparklesIcon className="w-4 h-4 text-yellow-600" />
        <span className="font-serif italic text-yellow-600/80 text-lg tracking-wide">
          Система Самопізнання
        </span>
        <SparklesIcon className="w-4 h-4 text-yellow-600" />
      </div>

      <h1 className="text-6xl md:text-8xl text-white tracking-tight mb-8 leading-[0.9] text-glow brand-font">
        ПАРС <br />
        <span className="text-zinc-600 text-5xl md:text-7xl">Творення</span>
      </h1>

      <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto font-serif italic">
        Твій Хрест Потенціалу. Твій Час. Твоє Справжнє «Я».
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <Button size="lg" type="link" to={RoutePath.ORACLE}>
          Відкрити Оракул
        </Button>
        <Button size="lg" isIcon={false} variant="secondary">
          Дізнатись Більше
        </Button>
      </div>
    </section>
  );
};

export default FirstSection;
