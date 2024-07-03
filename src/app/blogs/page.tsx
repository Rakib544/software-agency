import { technologyArticles } from "@/data/blog-data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function Blogs() {
  return (
    <div className="mb-32">
      <section className="mt-20 md:mt-40 mb-20 md:mb-40 container">
        <span className="block mb-3 text-sm font-medium">Blogs</span>
        <h1 className="inline-block text-3xl md:text-[42px] leading-none max-w-3xl font-extrabold tracking-tight text-gradient text-transparent bg-clip-text text-balance pb-2">
          Explore our latest articles and news
        </h1>
        <p className="max-w-xl text-muted-foreground leading-relaxed">
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
        </p>
      </section>
      <div className="container">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-8 flex flex-col gap-y-4 max-w-xl order-2 md:order-1">
            <h2 className="text-xl md:text-2xl font-bold line-clamp-2 tracking-tight">
              The Future of Web Development: Our Predictions for 2023
            </h2>
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              Fragmentation. The pain point we hear most often when asking
              people to describe their investing workflow. From interviewing
              thousands of the lessons.
            </p>
            <p className="text-muted-foreground font-medium text-sm flex gap-x-2 items-center">
              Read More <ArrowRight className="size-4" />
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 order-1 md:order-2">
            <img
              src="https://images.ctfassets.net/vnhpjjd2fzcz/6lNziLO0oSx6Y3JMfj540b/ab1d904c35fa9a16cc4525b742ff12e0/Preview-Trading_Journal_2x.jpg?w=1710&h=570&q=100&fm=webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mt-32">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          {technologyArticles.map((article, index) => (
            <article
              key={article.title}
              className={cn(
                "col-span-12 md:col-span-6",
                index % 6 === 0 || index % 6 === 3 || index % 6 === 4
                  ? "lg:col-span-7"
                  : "lg:col-span-5"
              )}
            >
              <div className="h-[280px]">
                <img
                  src={article.image}
                  alt=""
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-4 max-w-xl">
                <h3 className="text-xl font-bold line-clamp-2 tracking-tight">
                  {article.title}
                </h3>
                <p className="text-muted-foreground">{article.subtitle}</p>
                <p className="text-sm font-semibold text-muted-foreground">
                  5 minute read
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
