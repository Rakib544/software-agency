import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const services = [
  {
    id: 1,
    title: "UI/UX design",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience. So we are trying to solve this issue",
  },
  {
    id: 2,
    title: "Web development",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience. So we are trying to solve this issue",
  },
  {
    id: 4,
    title: "App development",
    description:
      "Expand functionality effortlessly with versatile plugins and extensions tailored to enhance your analytics experience. So we are trying to solve this issue",
  },
];

export default function Services() {
  return (
    <div className="mt-20 md:mt-32 container">
      <div className="mb-16 grid grid-cols-12 gap-x-6 gap-y-2 items-center">
        <div className="col-span-12 lg:col-span-6">
          <p className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-4">
            Services
          </p>
          <h2 className="text-2xl md:text-4xl max-w-lg tracking-tight font-extrabold text-gradient text-transparent bg-clip-text">
            We help you identify, explore and respond to new opportunities.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <p className="text-muted-foreground leading-relaxed">
            We offer services that can help businesses to improve their
            visibility and business reputation online, expand market reach.
            Following the services we provide.
          </p>
        </div>
      </div>
      <ul>
        {services.map((service, index) => (
          <li key={index} className="pb-4 border-b last:border-none">
            <Link
              href="/"
              className="grid grid-cols-12 gap-x-6 gap-y-2 items-end py-4 w-full"
            >
              <div className="col-span-12 md:col-span-4">
                <span className="text-xl font-bold text-muted-foreground">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                  {service.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="text-base leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 flex justify-end md:justify-center">
                <span
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                    className:
                      "border-[1.5px] group-hover:bg-white group-hover:text-primary",
                  })}
                >
                  {" "}
                  <ArrowRight className="size-5" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
