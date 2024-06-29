import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <section className="container max-w-3xl mx-auto my-32 text-center">
      <h2 className="text-5xl font-extrabold">
        <span className="text-transparent text-gradient bg-clip-text !inline-block">
          That’s our story.
        </span>
        <span className="text-muted-foreground block mt-2">
          What&apos;s yours?
        </span>
      </h2>
      <Button size="lg" variant="outline" className="mt-8">
        Contact us
      </Button>
    </section>
  );
}
