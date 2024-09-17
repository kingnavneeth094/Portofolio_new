import { Vortex } from "../components/ui/vortex";
import { Carousel } from "../components/ui/carousel";
import { Card } from "../components/ui/carousel";
import data from "@/public/data/project_data";

export default function Project() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <section id="projects" className="bg-black py-16">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={200}
        className="h-full w-full flex flex-col justify-center items-center"
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-8">
          Explore My Projects
        </h2>
        <div className="w-full max-w-6xl px-4">
          <Carousel items={cards} />
        </div>
      </Vortex>
    </section>
  );
}
