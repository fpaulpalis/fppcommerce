import clsx from "clsx";
import Image from "next/image";

// 1. Define the props you want to allow
interface LogoIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export default function LogoIcon({ className, width, height }: LogoIconProps) {
  return (
    <div
      className={clsx("relative flex items-center justify-center", className)}
      // 2. Apply the width/height to the wrapper so the 'fill' image knows how big to be
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%'
      }}
    >
      <Image
        src="/logo.png"
        alt={`${process.env.SITE_NAME || 'Store'} logo`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
      />
    </div>
  );
}