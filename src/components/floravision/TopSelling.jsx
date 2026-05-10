import { SectionTitle } from "./SectionTitle";
import { ProductCard } from "./ProductCard";
import aglaonema from "@/assets/plant logo 15.png";
import plantain from "@/assets/plant logo 23.png";
import cactus from "@/assets/plant logo 24.png";
import swisscheese from "@/assets/plant logo 20.png";
import sansevieria from "@/assets/plant logo 16.png";
import agave from "@/assets/plant logo 26.png";

const products = [
  { image: aglaonema, name: "Aglaonema plant", desc: "The Aglaonema plant, commonly known as Chinese Evergreen, is known for its attractive foliage and ease of care.", price: "Rs. 300/-" },
  { image: plantain, name: "Plantain Lilies", desc: "Hostas are primarily grown for their lush, ornamental leaves, which come in a wide variety of shapes, sizes.", price: "Rs. 380/-" },
  { image: cactus, name: "Cactus", desc: "It is renown for their ability to thrive in arid environments.", price: "Rs. 259/-" },
  { image: swisscheese, name: "Swiss cheese Plant", desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves.", price: "Rs. 400/-" },
  { image: sansevieria, name: "Sansevioria plant", desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.", price: "Rs. 450/-" },
  { image: agave, name: "Agave plant", desc: "The Agave plant is a genus of succulents popularly known for their striking rosettes of thick, fleshy leaves.", price: "Rs. 359/-" },
];

export function TopSelling() {
  return (
    <section className="relative py-24">
      <div className="flora-shell">
        <SectionTitle>Our Top Selling Plants</SectionTitle>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-28">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
