import { Heart } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: "w-6 h-6",
      iconSmall: "w-3 h-3",
      text: "text-lg"
    },
    md: {
      icon: "w-8 h-8",
      iconSmall: "w-4 h-4",
      text: "text-2xl"
    },
    lg: {
      icon: "w-10 h-10",
      iconSmall: "w-5 h-5",
      text: "text-3xl"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Heart className={`${currentSize.icon} text-red-500 fill-current`} />
        <Heart className={`${currentSize.iconSmall} text-pink-400 fill-current absolute top-0.5 left-0.5`} />
      </div>
      <h1 className={`${currentSize.text} font-bold font-serif tracking-wide`}>
        Conexão Conjugal
      </h1>
    </div>
  );
}