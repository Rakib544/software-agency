import { generateBlurImageURL } from "@/data/blur-image-data";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: StaticImageData | string;
  name: string;
  role: string;
}

export default function TeamCard({
  image,
  name,
  role,
  className,
  children,
}: TeamCardProps) {
  return (
    <Link
      href="/team-details"
      className={clsx(
        "group relative block overflow-hidden rounded-3xl",
        className
      )}
    >
      <Image
        alt=""
        src={image}
        placeholder="blur"
        blurDataURL={generateBlurImageURL()}
        className="h-96 rounded-3xl border w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
        <p className="font-display text-base/6 font-semibold tracking-wide text-white">
          {name}
        </p>
        <p className="mt-2 text-sm text-white">{role}</p>
      </div>
      {children}
    </Link>
  );
}
