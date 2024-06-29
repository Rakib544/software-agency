export default function Team() {
  return (
    <section className="grid grid-cols-12 gap-y-4 mt-32 container">
      <div className="col-span-12 lg:col-span-3">
        <h2 className="text-2xl md:text-4xl text-gradient text-transparent bg-clip-text font-extrabold">
          The team
        </h2>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <p className="text-muted-foreground leading-relaxed lg:text-lg max-w-2xl mb-4">
          One thing we’ve learned from our years within growing startups is that
          throwing more people at a problem rarely hastens solving it.
        </p>
        <div className="mt-12"></div>
      </div>
    </section>
  );
}
