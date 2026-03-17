import { readFile } from "fs/promises";
import { ImageResponse } from "next/og";
import { join } from "path";

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  // Read the font
  const fontFile = await readFile(join(process.cwd(), "./fonts/Inter-Bold.ttf"));
  const font = Uint8Array.from(fontFile).buffer;

  // Read the logo and convert to Base64
  const logoFile = await readFile(join(process.cwd(), "./public/logo.png"));
  const logoBase64 = logoFile.toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl bg-white">
          {/* Using a standard HTML img tag for Satori compatibility */}
          <img src={logoSrc} width="80" height="80" alt="Logo" tw="object-contain" />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: font,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}