import clsx from "clsx";
import Image from "next/image";

export default function LogoIcon({ className }: { className?: string }) {
  return (
    <div className={clsx("relative flex items-center justify-center", className)}>
      <Image
        src="/logo.png" // The path points to your file in the public folder
        alt={`${process.env.SITE_NAME} logo`}
        fill
        className="object-contain" // Keeps your logo's aspect ratio intact
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}
