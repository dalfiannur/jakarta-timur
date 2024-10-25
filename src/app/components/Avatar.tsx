import Image from "next/image";

export const Avatar = ({
  src,
  size,
  alt,
}: {
  src: string;
  size: number;
  alt: string;
}) => {
  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt={alt}
      className="rounded-full aspect-square object-cover block"
    />
  );
};
