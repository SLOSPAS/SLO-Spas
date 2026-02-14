import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, CheckCircle, Ruler } from "lucide-react";
import {
  allProducts,
  getProductBySlug,
  getRelatedProducts,
  categoryLabels,
  contactSubjects,
} from "@/data/products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | SLO Spas" };

  return {
    title: `${product.name} | SLO Spas`,
    description: `${product.name} by ${product.brand} — ${product.description} Available at SLO Spas in San Luis Obispo.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const contactSubject = contactSubjects[product.category];
  const contactMessage = `I'm interested in the ${product.name}. Please send me more information.`;
  const contactHref = `/contact?subject=${encodeURIComponent(contactSubject)}&message=${encodeURIComponent(contactMessage)}`;

  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back link */}
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {product.additionalImages && product.additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {product.additionalImages.map((img, i) => (
                    <div key={i} className="relative aspect-video bg-gray-50 rounded-xl overflow-hidden">
                      <Image
                        src={img}
                        alt={`${product.name} - image ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-light text-primary text-sm font-medium px-3 py-1 rounded-full">
                  <Users className="w-4 h-4" />
                  {product.capacity}
                </span>
                {product.specs && (
                  <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                    <Ruler className="w-4 h-4" />
                    {product.specs}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Highlights */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {product.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="bg-light rounded-lg p-3 text-center"
                    >
                      <p className="text-xs font-medium text-gray-500 uppercase">
                        {h.label}
                      </p>
                      <p className="text-sm font-bold text-primary mt-1">
                        {h.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Models */}
              {product.models && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-1">
                    Available Models
                  </p>
                  <p className="text-gray-600">{product.models}</p>
                </div>
              )}

              {/* CTA */}
              <Link
                href={contactHref}
                className="inline-flex items-center gap-2 bg-secondary text-dark font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      {(product.longDescription || product.features.length > 0) && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Long Description */}
              {product.longDescription && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    About the {product.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>
              )}

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8">
              More {categoryLabels[product.category]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/catalog/${related.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl bg-gray-50">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-muted text-sm mb-3 line-clamp-2">
                      {related.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 bg-light text-primary text-sm font-medium px-3 py-1 rounded-full">
                      <Users className="w-4 h-4" />
                      {related.capacity}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Visit our showroom to see the {product.name} in person, or contact
            us for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center gap-2 bg-secondary text-dark font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8055443565"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-dark transition-all duration-300 text-lg"
            >
              Call (805) 544-3565
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
