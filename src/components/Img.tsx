import Image, { ImageProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Img(props: ImageProps) {
  const src =
    typeof props.src === "string" && props.src.startsWith("/")
      ? `${basePath}${props.src}`
      : props.src;

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} src={src} />;
}
