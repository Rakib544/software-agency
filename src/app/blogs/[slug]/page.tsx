import ScrollIndicator from "@/components/scroll-indicator";
import BlogContent from "./blog-content";

export default function BlogDetails() {
  return (
    <div>
      <section className="container my-32">
        <h1 className="inline-block text-3xl md:text-[42px] leading-none max-w-3xl font-extrabold tracking-tight text-gradient text-transparent bg-clip-text text-balance pb-2">
          The Future of Web Development: Our Predictions for 2024
        </h1>
        <p className="text-sm font-semibold text-muted-foreground">
          by Chelsea Hagon, Senior Developer
        </p>
        <div className="flex items-center gap-x-4 text-sm text-muted-foreground font-semibold">
          <ScrollIndicator />5 minute read
        </div>
      </section>
      <BlogContent />
    </div>
  );
}
