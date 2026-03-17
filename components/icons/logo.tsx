import Image from "next/image";

export default function LogoIcon({ className, width, height }: LogoIconProps) {
  return (
    <Image
      src={"/logo.png"}
      alt={'${process.env.SITE_NAME}'}
      width={50}
      height={50}
    />
  );
}