import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-32">
      <div>
        <section className="mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-gradient text-transparent bg-clip-text text-balance">
            We&apos;re a software agency building impactful products.
          </h1>
          <p className="max-w-lg mt-2 text-muted-foreground leading-relaxed">
            We provide innovative software solutions to help your business grow
            and eventually helps you business to produce better product.
          </p>
        </section>
        <Button variant="outline" size="lg">
          Let&apos;s talk
        </Button>
      </div>
      <div>Image will be here</div>
    </div>
  );
}
