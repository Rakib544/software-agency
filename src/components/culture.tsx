import { GridList, GridListItem } from "./grid-list";

export default function OurCulture() {
  return (
    <section className="mt-32 container">
      <h2>
        <span className="block font-bold">Our culture</span>
        <span className="block text-4xl max-w-xl mt-3 font-extrabold text-transparent text-gradient bg-clip-text">
          Balance your passion with your passion for life.
        </span>
      </h2>
      <p className="text-lg mt-4">
        We are a group of like-minded people who share the same core values.
      </p>
      <GridList className="mt-12">
        <GridListItem title="Loyalty">
          Our team has been with us since the beginning because none of them are
          allowed to have LinkedIn profiles.
        </GridListItem>
        <GridListItem title="Trust">
          We don’t care when our team works just as long as they are working
          every waking second.
        </GridListItem>
        <GridListItem title="Compassion">
          You never know what someone is going through at home and we make sure
          to never find out.
        </GridListItem>
      </GridList>
    </section>
  );
}
