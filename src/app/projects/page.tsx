import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Projects | SLO Spas",
};

const projects = [
  {
    title: "Jacuzzi Under Pergola",
    description:
      "Shaded relaxation spot with custom pergola and hot tub.",
    category: "Hot Tub",
    image: "/images/portfolio/port2.jpg",
  },
  {
    title: "Tropical Waterfront Setting",
    description:
      "Paradise-inspired installation overlooking the water.",
    category: "Hot Tub",
    image: "/images/portfolio/port3.jpg",
  },
  {
    title: "Oceanfront View Setup",
    description:
      "Stunning ocean views from this premium hot tub placement.",
    category: "Hot Tub",
    image: "/images/portfolio/port4.jpg",
  },
  {
    title: "Deck Lounge Installation",
    description:
      "Multi-level deck with hot tub and lounge area.",
    category: "Hot Tub",
    image: "/images/portfolio/port5.jpg",
  },
  {
    title: "Infrared Sauna in Home Gym",
    description:
      "Custom infrared sauna integrated into a home fitness space.",
    category: "Sauna",
    image: "/images/portfolio/port6.jpg",
  },
  {
    title: "Luxury LX Night View",
    description:
      "Ambient evening lighting showcasing the Jacuzzi LX model.",
    category: "Hot Tub",
    image: "/images/portfolio/port7.jpg",
  },
  {
    title: "Backyard Waterfall Feature",
    description:
      "Hot tub installation with custom waterfall landscaping.",
    category: "Hot Tub",
    image: "/images/portfolio/port8.jpg",
  },
  {
    title: "Poolside Hot Tub",
    description: "Elegant spa placement next to the pool.",
    category: "Hot Tub",
    image: "/images/portfolio/port9.jpg",
  },
  {
    title: "Jacuzzi Hot Tub in Deck",
    description:
      "Seamless deck integration with a luxury Jacuzzi installation.",
    category: "Hot Tub",
    image: "/images/portfolio/port1.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-dark text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            See our recent installations and get inspired for your backyard
            transformation.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-video rounded-t-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="inline-block bg-primary bg-opacity-10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Let us bring your backyard vision to life with a custom installation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-dark font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
