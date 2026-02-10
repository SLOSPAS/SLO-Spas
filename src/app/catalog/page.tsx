import Link from "next/link";
import Image from "next/image";
import {
  Droplets,
  Sun,
  Snowflake,
  Users,
  Waves,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Catalog | SLO Spas",
  description:
    "Browse the full SLO Spas product catalog featuring Jacuzzi hot tubs, infrared saunas, the Jacuzzi Kodiak Cold Plunge, and Covana automated spa covers.",
};

const jacuzziProducts = [
  {
    name: "J-200 Series",
    priceRange: "Contact for Pricing",
    description:
      "The perfect entry point to Jacuzzi ownership. ClassicPro jets deliver reliable hydrotherapy in compact and full-sized models. Available in 3 to 7 seats with lounge and upright seating options.",
    capacity: "3-7 seats",
    image: "/images/products/hottubs/j200-series.png",
    models: "J-215, J-225, J-235, J-245, J-285",
  },
  {
    name: "J-300 Series",
    priceRange: "Contact for Pricing",
    description:
      "Ergonomically designed for comfort and style. Full-body lounge seats, diverse therapy seating, and PowerPro jets deliver a premium hydrotherapy experience across a wide range of sizes.",
    capacity: "3-7 seats",
    image: "/images/products/hottubs/j300-series.jpg",
    models: "J-315, J-325, J-335, J-345, J-355, J-365, J-375, J-385",
  },
  {
    name: "J-400 Series",
    priceRange: "Contact for Pricing",
    description:
      "Premium open-seated spas with legendary Jacuzzi hydrotherapy. Freedom to move between ergonomic seats, available in compact to full-size configurations with modern hardwood cabinetry.",
    capacity: "4-6 seats",
    image: "/images/products/hottubs/j400-series.png",
    models: "J-404L, J-408, J-408L",
  },
  {
    name: "J-500 Series",
    priceRange: "Contact for Pricing",
    description:
      "The most advanced hydrotherapy experience Jacuzzi has ever created. Features infrared and red light therapy, Captain\u2019s chairs, and a multisensory wellness experience designed to transform how you feel.",
    capacity: "7-9 seats",
    image: "/images/products/hottubs/j500-series.png",
    models: "J-508, J-508L, J-509",
  },
  {
    name: "J-LXL",
    priceRange: "Contact for Pricing",
    description:
      "The flagship Jacuzzi spa. Patent-pending FX-IR therapy seat combines infrared, red light, and hydromassage. True Water nanobubble technology, SmartTub remote control, infinity-edge waterfall, and 39 jets.",
    capacity: "6 seats",
    image: "/images/products/hottubs/j-lxl.jpg",
    specs: "89\"L x 89\"W x 34\"H | 39 jets | SmartTub enabled",
  },
];

const swimSpaProducts = [
  {
    name: "Jacuzzi Swim Spas",
    priceRange: "Contact for Pricing",
    description:
      "High-performance all-season pools for swimming, fitness, and relaxation. Available in 12\u2019 to 19\u2019 lengths with PowerPro and PowerActive swim current technology. Dual-temperature models available for separate swim and spa zones.",
    capacity: "Multiple sizes",
    image: "/images/products/swimspas/swim-spa-lifestyle.jpg",
    models: "J-12 Flow, J-13 PowerPlay, J-14 PowerPro, J-16 PowerActive, J-16 PowerPro, J-19 PowerActive, J-19DT PowerPro, J-19DT PowerActive",
  },
];

const saunaProducts = [
  {
    name: "Clearlight Sanctuary Outdoor 2",
    priceRange: "Contact for Pricing",
    description:
      "2-person full spectrum outdoor infrared sauna. TrueWave carbon/ceramic heaters, smartphone control, medical grade chromotherapy, and low EMF/ELF shielding.",
    capacity: "2 person",
    image: "/images/products/saunas/clearlight-od2.png",
    specs: "57\"W x 52\"D x 80\"H | 765 lbs | 240V",
  },
  {
    name: "Clearlight Sanctuary Outdoor 5",
    priceRange: "Contact for Pricing",
    description:
      "4-5 person full spectrum outdoor infrared sauna. Engineered wood exterior, mahogany interior, programmable timer, and outdoor cover included.",
    capacity: "4-5 person",
    image: "/images/products/saunas/clearlight-od5.jpg",
    specs: "82\"W x 52\"D x 80\"H | 1,050 lbs | 240V",
  },
  {
    name: "Jacuzzi JS-1i Infrared Sauna",
    priceRange: "Starting at $8,699",
    description:
      "1-person infrared sauna with red light therapy, far infrared and full spectrum heaters, chiropractor-designed ergonomic backrest, and vibrational resonance therapy.",
    capacity: "1 person",
    image: "/images/products/saunas/jacuzzi-js1i.png",
    specs: "45\"L x 50\"W x 78\"H | 510 lbs | 120V",
  },
  {
    name: "Jacuzzi JS-2i Infrared Sauna",
    priceRange: "Starting at $9,299",
    description:
      "2-person infrared sauna with red light therapy, full spectrum heaters, Bluetooth audio with subwoofer, and heavy-duty construction.",
    capacity: "2 person",
    image: "/images/products/saunas/jacuzzi-js2i.png",
    specs: "54\"L x 50\"W x 78\"H | 610 lbs | 240V",
  },
  {
    name: "Jacuzzi JS-3i Infrared Sauna",
    priceRange: "Starting at $10,099",
    description:
      "3-person infrared sauna with red light therapy, full spectrum heaters, vibrational resonance therapy, and enhanced Bluetooth audio system.",
    capacity: "3 person",
    image: "/images/products/saunas/jacuzzi-js3i.png",
    specs: "74\"L x 50\"W x 78\"H | 710 lbs | 240V",
  },
];

const coldPlungeProducts = [
  {
    name: "Jacuzzi Kodiak Cold Plunge",
    priceRange: "Contact for Pricing",
    description:
      "Temperature control from 39\u00B0F to 104\u00B0F. Fully immersive deep soak with insulated hard shell, lockable cover, LED interior lighting, and in-line filtration. Indoor or outdoor use.",
    capacity: "1 person",
    image: "/images/products/coldplunge/kodiak-cold-plunge.jpg",
    specs: "34\"L x 33\"W x 28\"H | 10-year frame & shell warranty",
  },
];

const covanaProducts = [
  {
    name: "Covana Oasis",
    priceRange: "Contact for Pricing",
    description:
      "Luxury automated spa cover and gazebo in one. Rises with a simple turn of the key, providing shelter and ambient lighting for your hot tub.",
    capacity: "Fits most spas",
    image: "/images/products/covana/covana-oasis.png",
  },
  {
    name: "Covana Oasis Midnight",
    priceRange: "Contact for Pricing",
    description:
      "Deep black variant of the Oasis. Same automated convenience with a sleek dark finish that highlights your natural surroundings.",
    capacity: "Fits most spas",
    image: "/images/products/covana/covana-oasis-midnight.jpg",
  },
  {
    name: "Covana Evolution",
    priceRange: "Contact for Pricing",
    description:
      "Sleek, modular automated spa cover with contemporary design. Flexible configuration options to match your outdoor space.",
    capacity: "Modular sizing",
    image: "/images/products/covana/covana-evolution.jpg",
  },
  {
    name: "Covana Legend",
    priceRange: "Contact for Pricing",
    description:
      "Designed specifically for swim spas. Fully automated motorized cover that makes opening and protecting your swim spa effortless.",
    capacity: "Swim spa",
    image: "/images/products/covana/covana-legend.jpg",
  },
];

interface Product {
  name: string;
  priceRange: string;
  description: string;
  capacity: string;
  image: string;
  specs?: string;
  models?: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden rounded-t-xl bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
        <p className="text-secondary font-semibold text-lg mb-3">
          {product.priceRange}
        </p>
        <p className="text-muted mb-4">{product.description}</p>
        {product.specs && (
          <p className="text-xs text-gray-500 mb-3">{product.specs}</p>
        )}
        {product.models && (
          <p className="text-xs text-gray-500 mb-3">
            <span className="font-medium">Models:</span> {product.models}
          </p>
        )}
        <span className="inline-flex items-center gap-1.5 bg-light text-primary text-sm font-medium px-3 py-1 rounded-full">
          <Users className="w-4 h-4" />
          {product.capacity}
        </span>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Page Header */}
      <section className="relative bg-dark text-white py-20 text-center overflow-hidden">
        <Image
          src="/images/landing.jpg"
          alt="SLO Spas showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Product Catalog
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Explore our premium selection of hot tubs, saunas, cold plunges, and
            automated spa covers.
          </p>
        </div>
      </section>

      {/* Jacuzzi Hot Tubs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
              <Droplets className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Jacuzzi Hot Tubs
              </h2>
              <div className="h-1 w-20 bg-blue-500 rounded mt-1" />
            </div>
          </div>
          <p className="text-muted mb-8 ml-16">
            Entry-level tubs starting at $4,500. Contact us for personalized
            pricing on any model.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {jacuzziProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Jacuzzi Swim Spas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
              <Waves className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Jacuzzi Swim Spas
              </h2>
              <div className="h-1 w-20 bg-blue-500 rounded mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {swimSpaProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Infrared Saunas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-amber-100 text-amber-700 p-3 rounded-xl">
              <Sun className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Infrared Saunas
              </h2>
              <p className="text-muted mt-1">
                Clearlight &amp; Jacuzzi Infrared Sauna Collections
              </p>
              <div className="h-1 w-20 bg-amber-500 rounded mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saunaProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Jacuzzi Cold Plunge */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-cyan-100 text-cyan-700 p-3 rounded-xl">
              <Snowflake className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Jacuzzi Cold Plunge
              </h2>
              <div className="h-1 w-20 bg-cyan-500 rounded mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coldPlungeProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Covana Automated Covers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-100 text-emerald-700 p-3 rounded-xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Covana Automated Spa Covers
              </h2>
              <p className="text-muted mt-1">
                Automated covers &amp; gazebos &mdash; protect your spa with a
                turn of the key
              </p>
              <div className="h-1 w-20 bg-emerald-500 rounded mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {covanaProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Waves className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <p className="text-lg md:text-xl mb-8">
            Interested in any of our products? Visit our showroom or contact us
            for a personalized quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
