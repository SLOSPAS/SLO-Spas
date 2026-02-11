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
import {
  jacuzziProducts,
  swimSpaProducts,
  outdoorSaunas,
  indoorSaunas,
  coldPlungeProducts,
  covanaProducts,
} from "@/data/products";
import type { Product } from "@/data/products";

export const metadata = {
  title: "Catalog | SLO Spas",
  description:
    "Browse the full SLO Spas product catalog featuring Jacuzzi hot tubs, infrared saunas, the Jacuzzi Kodiak Cold Plunge, and Covana automated spa covers.",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
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
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted mb-4">{product.description}</p>
        {product.specs && (
          <p className="text-xs text-gray-500 mb-3">{product.specs}</p>
        )}
        {product.models && (
          <p className="text-xs text-gray-500 mb-3">
            <span className="font-medium">Models:</span> {product.models}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 bg-light text-primary text-sm font-medium px-3 py-1 rounded-full">
            <Users className="w-4 h-4" />
            {product.capacity}
          </span>
          <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            View Details <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-auto min-h-[280px] bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted mb-4">{product.description}</p>
          {product.models && (
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-medium">Models:</span> {product.models}
            </p>
          )}
          {product.specs && (
            <p className="text-sm text-gray-500 mb-4">{product.specs}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 bg-light text-primary text-sm font-medium px-3 py-1 rounded-full w-fit">
              <Users className="w-4 h-4" />
              {product.capacity}
            </span>
            <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              View Details <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
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
            From entry-level to flagship luxury, find the perfect spa for your home.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {jacuzziProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
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
          <FeaturedProductCard product={swimSpaProducts[0]} />
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
              <div className="h-1 w-20 bg-amber-500 rounded mt-1" />
            </div>
          </div>

          {/* Outdoor Saunas */}
          <h3 className="text-xl font-semibold text-primary mb-4">Clearlight Outdoor Saunas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {outdoorSaunas.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Indoor Saunas */}
          <h3 className="text-xl font-semibold text-primary mb-4">Jacuzzi Indoor Saunas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {indoorSaunas.map((product) => (
              <ProductCard key={product.slug} product={product} />
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
          <FeaturedProductCard product={coldPlungeProducts[0]} />
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
              <ProductCard key={product.slug} product={product} />
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
