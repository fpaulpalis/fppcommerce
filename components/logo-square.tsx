import clsx from "clsx";
import Image from "next/image";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center",
        {
          "h-[60px] w-[60px]": !size,
          "h-[40px] w-[40px]": size === "sm",
        },
      )}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={size === "sm" ? 40 : 60}
        height={size === "sm" ? 40 : 60}
        priority // Added priority since this is usually in the header above the fold
        className={clsx("object-contain", {
          "h-[60px] w-[60px]": !size,
          "h-[40px] w-[40px]": size === "sm",
        })}
      />
    </div>
  );
}