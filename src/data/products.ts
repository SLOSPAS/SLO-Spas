/**
 * SLO Spas Product Data
 * Last updated: February 2026
 *
 * HOW TO UPDATE PRODUCT INFO:
 *
 * Hot Tubs (Jacuzzi) — grouped by series (J-200, J-300, J-400, J-500, J-LXL)
 *   Browse all: https://www.jacuzzi.com/en-us/hot-tubs/browse-all-hot-tubs
 *   Individual models use the pattern: https://www.jacuzzi.com/en-us/j{model}/J{model}-MY{year}.html
 *   Example: https://www.jacuzzi.com/en-us/j509/J509-MY26.html (J-509, model year 2026)
 *   The first digit tells you the series — J-509 → J-500 Series
 *
 * Swim Spas (Jacuzzi)
 *   Browse all: https://www.jacuzzi.com/en-us/swim-spas/browse-all-swim-spas
 *
 * Indoor Saunas (Jacuzzi)
 *   Individual models: https://www.jacuzzi.com/en-us/{capacity}-person/JS-{size}i.html
 *   Examples: JS-1i, JS-2i, JS-3i
 *
 * Outdoor Saunas (Clearlight / Jacuzzi)
 *   https://infraredsauna.com/sanctuary-outdoor-two-person/
 *   https://infraredsauna.com/sanctuary-outdoor-five-person/
 *
 * Cold Plunge (Jacuzzi Kodiak)
 *   https://www.jacuzzi.com/en-us/cold-plunges/
 *
 * Covana Automated Covers
 *   https://covana.com/en/produit/oasis/
 *   https://covana.com/en/produit/oasis-midnight/
 *   https://covana.com/en/produit/evolution/
 *   https://covana.com/en/produit/legend/
 *
 * Product images go in /public/images/products/{category}/
 */

export type ProductCategory =
  | "hot-tubs"
  | "swim-spas"
  | "outdoor-saunas"
  | "indoor-saunas"
  | "cold-plunges"
  | "covana-covers";

export interface Product {
  name: string;
  slug: string;
  category: ProductCategory;
  brand: string;
  description: string;
  longDescription?: string;
  capacity: string;
  image: string;
  additionalImages?: string[];
  specs?: string;
  models?: string;
  features: string[];
  highlights?: { label: string; value: string }[];
}

export const jacuzziProducts: Product[] = [
  {
    name: "J-200 Series",
    slug: "j-200-series",
    category: "hot-tubs",
    brand: "Jacuzzi",
    description:
      "The perfect entry point to Jacuzzi ownership. Classic and ClassicPro jets deliver reliable hydrotherapy in compact and full-sized models, from an intimate 3-seat spa up to a spacious 7-seat model with a jetted foot dome.",
    longDescription:
      "The J-200 Collection makes Jacuzzi quality accessible with proven jet placement and a complete whirlpool experience. Every model features ClearRay UV-C water purification for crystal-clear water with less sanitizer, SmartTub connectivity for remote monitoring and energy savings, and UV-resistant ProEndure cabinetry that stays beautiful with zero maintenance. Ergonomic seats, plush pillows, ambient multi-color LED lighting, and integrated cup holders round out a spa designed to deliver years of reliable enjoyment.",
    capacity: "3-7 seats",
    image: "/images/products/hottubs/0233_jacuzzi_04_view_29_J-225_Silver-Pearl_Pecan-SRGB-Full.jpg",
    models: "J-215, J-225, J-235, J-245, J-285",
    features: [
      "Classic and ClassicPro jets with proven ergonomic placement",
      "ClearRay UV-C water purification \u2014 cleaner water with less sanitizer",
      "SmartTub system for remote monitoring and energy savings",
      "UV-resistant ProEndure tool-free cabinetry",
      "Multi-color LED lighting and integrated cup holders",
      "Models from compact 3-seat (J-215) to full-size 7-seat (J-285)",
      "2-stage filtration with ProCatch filter bag technology",
      "120V plug-and-play or 240V options available",
    ],
    highlights: [
      { label: "Jets", value: "21\u201342" },
      { label: "Seating", value: "3\u20137 adults" },
      { label: "Water Care", value: "ClearRay UV-C" },
      { label: "Smart", value: "SmartTub App" },
    ],
  },
  {
    name: "J-300 Series",
    slug: "j-300-series",
    category: "hot-tubs",
    brand: "Jacuzzi",
    description:
      "Comfort-first engineering with premium PowerPro jets, the exclusive HydroSoothe no-splash massage pillow, and an advanced touchscreen control panel. Eight models from a compact 3-seater to a full-size spa for seven.",
    longDescription:
      "The J-300 Collection puts comfort at the forefront of every design decision. PowerPro jets deliver targeted hydrotherapy to specific muscle groups, while the exclusive HydroSoothe pillow provides a soothing stream of water to the neck and shoulders \u2014 a feature found only in this collection. Select lounge models include the ProAir seat with exclusive bubbling BX jets that target the calves for full-body relief. New for 2025, every J-300 features an upgraded touchscreen control panel, ClearRay Active Oxygen water purification, the cascading Water Rainbow waterfall, and optional True Water nanobubble technology. ProLite energy-efficient LED lighting illuminates above and below the water, behind pillows, and under beverage coasters.",
    capacity: "3-7 seats",
    image: "/images/products/hottubs/j300-series.jpg",
    models: "J-315, J-325, J-335, J-345, J-355, J-365, J-375, J-385",
    features: [
      "PowerPro jets targeting specific muscle groups",
      "Exclusive HydroSoothe no-splash jetted massage pillow",
      "ProAir lounge seat with bubbling BX calf jets (select models)",
      "ClearRay Active Oxygen water purification (UV-C + ozone)",
      "Upgraded modern touchscreen control panel (new for 2025)",
      "Cascading Water Rainbow waterfall",
      "4-stage filtration with dual 60 sq ft filter cartridges",
      "Optional True Water nanobubble technology upgrade",
      "ProLite energy-efficient LED lighting above and below water",
      "SmartTub system included",
    ],
    highlights: [
      { label: "Jets", value: "23\u201351" },
      { label: "Seating", value: "3\u20137 adults" },
      { label: "Signature", value: "HydroSoothe Pillow" },
      { label: "Water Care", value: "Active Oxygen" },
    ],
  },
  {
    name: "J-400 Series",
    slug: "j-400-series",
    category: "hot-tubs",
    brand: "Jacuzzi",
    description:
      "Premium open-seated spas with infrared and red light therapy, True Water nanobubble technology, and SmartTub app control. Move freely between ergonomic seats and enjoy legendary Jacuzzi hydrotherapy with modern design.",
    longDescription:
      "The J-400 Collection is the pinnacle of Jacuzzi engineering. The patent-pending FX-IR therapy seat pairs hydromassage with infrared and red light therapy targeting the lower back for deep rejuvenation \u2014 Jacuzzi is the first and only brand to offer this technology. True Water nanobubble technology continuously releases trillions of oxygen-filled bubbles to scrub away contaminants and deliver sparkling, 99.999% chlorine-free water. SmartTub integration provides remote control through your phone, Alexa, or Siri using a cellular connection that\u2019s simpler and more reliable than Wi-Fi, while Smart Heat Mode reduces standby energy consumption by up to 25%. The open-seated design gives you freedom to move between ergonomic positions, each engineered for targeted relief. An infinity-edge waterfall, MX jets for lower back massage, and RX specialty jets for full-body relaxation complete the experience. ClearRay Active Oxygen combines ozone and UV-C for hands-free water care with 5-stage filtration.",
    capacity: "4-7 seats",
    image: "/images/products/hottubs/j400-series.png",
    models: "J-404L, J-408, J-408L",
    features: [
      "Infrared and red light therapy via FX-IR seat",
      "True Water nanobubble technology \u2014 99.999% chlorine-free water",
      "SmartTub app with Smart Heat Mode (25% energy savings)",
      "5-stage filtration for fewer water changes",
      "Open-seated design for unrestricted movement",
      "Infinity-edge waterfall with integrated LED lighting",
      "Multi-layer insulation for quiet, efficient operation",
      "Heat-pump ready for year-round energy-efficient use",
      "Deep relief MX and RX therapy seats",
    ],
    highlights: [
      { label: "Jets", value: "39\u201341" },
      { label: "Therapy", value: "Infrared + Red Light" },
      { label: "Water Care", value: "True Water Nano" },
      { label: "Smart", value: "SmartTub App" },
    ],
  },
  {
    name: "J-500 Series",
    slug: "j-500-series",
    category: "hot-tubs",
    brand: "Jacuzzi",
    description:
      "The most immersive and intuitive spa Jacuzzi has ever created. Five experience modes coordinate hydromassage, infrared therapy, and lighting into a multisensory wellness journey \u2014 with up to 76 jets, True Water technology, and curated soundscapes.",
    longDescription:
      "The J-500 Collection redefines what a hot tub can be. Five immersive experience modes orchestrate hydromassage, infrared therapy, and ambient lighting into coordinated wellness sessions, with three intensity levels from gentle relaxation to deep therapeutic massage. Specialty seats include infrared therapy with four IR lights for full-back coverage, Captain\u2019s chairs, MX deep-tissue seats, RX spinning therapy seats, ProAir neck and shoulder seats, and FX spiral-action massage seats. True Water nanobubble technology keeps water 99.999% chlorine-free, and 6-stage filtration with a space-saving design minimizes maintenance. SmartTub app integration lets each family member save personal profiles for jet preferences, lighting, and audio \u2014 including a curated collection of relaxation soundscapes through adjustable surround-sound pillows. Responsive ambient lighting activates as you approach.",
    capacity: "7-9 seats",
    image: "/images/products/hottubs/j500-series.png",
    models: "J-508, J-508L, J-509",
    features: [
      "Five immersive experience modes (hydromassage + IR + lighting)",
      "Three preset hydromassage intensity levels",
      "Infrared therapy seat with four IR lights and full-back coverage",
      "True Water nanobubble technology \u2014 99.999% chlorine-free",
      "6-stage filtration with space-saving design",
      "Curated soundscapes with surround-sound adjustable pillows",
      "SmartTub app with personalized user profiles",
      "Responsive ambient lighting that activates on approach",
      "Dual waterfalls with integrated lighting",
      "Heat-pump ready for energy-efficient operation",
    ],
    highlights: [
      { label: "Jets", value: "56\u201376" },
      { label: "Therapy", value: "Infrared + Red Light" },
      { label: "Modes", value: "5 Experience Modes" },
      { label: "Water Care", value: "True Water + 6-Stage" },
    ],
  },
];

export const swimSpaProducts: Product[] = [
  {
    name: "Jacuzzi Swim Spas",
    slug: "jacuzzi-swim-spas",
    category: "swim-spas",
    brand: "Jacuzzi",
    description:
      "High-performance all-season pools for swimming, fitness, and relaxation. Available in 12\u2019 to 19\u2019 lengths with PowerPro and PowerActive swim current technology. Dual-temperature models offer separate swim and spa zones at independent temperatures.",
    longDescription:
      "Jacuzzi Swim Spas combine a full-length swimming pool, fitness center, and hydrotherapy spa into a single all-season unit. The PowerPro PX swim jets and PowerActive AX jets produce a smooth, powerful current for in-place swimming, while the SteadySwim buoyancy jet keeps your body aligned during exercise. The SmoothSwim shell is contoured at the hips to minimize wave reflection and keep you centered in your lane. Dual-temperature models (J-19DT series) feature independent electronics so you can swim in one zone while someone relaxes in the heated spa section \u2014 each at its own temperature. The FX-IR seat on select models adds infrared and red light therapy with calf and foot massage after your workout. Every swim spa includes ClearRay Active Oxygen filtration, ProFusion acrylic shell, full-foam insulation, galvanized steel frame, and a ProLast cover that\u2019s 25% lighter than vinyl and UV/water-resistant. Premium LED lighting, illuminated waterfall, and synthetic wood cabinetry complete the package.",
    capacity: "Multiple sizes",
    image: "/images/products/swimspas/JSS_J19DT_PowerPro_Platinum_Lifestyle_Pavilion_16x9-SRGB-Full.jpg",
    additionalImages: ["/images/products/swimspas/swim-spa-lifestyle.jpg", "/images/products/swimspas/JD-l-Oct-J5-Key-Visual-thin-lines--approved-asset-version-.png"],
    models:
      "J-12 Flow, J-13 PowerPlay, J-14 PowerPro, J-16 PowerActive, J-16 PowerPro, J-19 PowerActive, J-19DT PowerPro, J-19DT PowerActive",
    features: [
      "PowerPro PX and PowerActive AX swim jet technology",
      "SteadySwim buoyancy jet for body alignment during exercise",
      "SmoothSwim shell contoured to minimize wave reflection",
      "Dual-temperature models with independent zone controls (J-19DT)",
      "FX-IR seat with infrared and red light therapy (select models)",
      "ClearRay Active Oxygen filtration system",
      "12\u2019 to 19\u2019 lengths \u2014 1,345 to 2,013 gallons",
      "Soft Stride mat for low-impact jogging and walking",
      "ProLast cover \u2014 25% lighter, UV and water resistant",
      "ProFusion acrylic shell with full-foam insulation",
    ],
    highlights: [
      { label: "Lengths", value: "12\u2019 \u2013 19\u2019" },
      { label: "Zones", value: "Single or Dual-Temp" },
      { label: "Swim Tech", value: "PowerPro / PowerActive" },
      { label: "Models", value: "8 available" },
    ],
  },
];

export const outdoorSaunas: Product[] = [
  {
    name: "Clearlight Sanctuary Outdoor 2",
    slug: "clearlight-sanctuary-outdoor-2",
    category: "outdoor-saunas",
    brand: "Clearlight",
    description:
      "The only true full spectrum outdoor infrared sauna for two. TrueWave carbon/ceramic heaters deliver near, mid, and far infrared simultaneously. iOS/Android smartphone control, medical grade chromotherapy, and the lowest EMF/ELF levels in the industry.",
    longDescription:
      "The Sanctuary Outdoor 2 combines Clearlight\u2019s proprietary TrueWave full spectrum heating system with weather-resistant construction built to perform outdoors year-round. Carbon/ceramic far infrared heaters line the back and side walls while a full spectrum heater on the front wall delivers all three infrared wavelengths simultaneously. Control every session from your phone with the iOS/Android app, or use the digital panel and 36-hour programmable timer. The furniture-grade cabinet features engineered wood on the exterior, rich mahogany on the interior, double-wall tongue-and-groove insulation, 8mm thick glass door, and double-pane windows. Medical grade chromotherapy with 96 LED lights and 12 colors is available, along with optional upgrades including halotherapy (HALO ONE salt therapy), vibrational resonance therapy, and red light therapy. An outdoor cover is included. Backed by a limited lifetime warranty on components and 5 years on the cabin.",
    capacity: "2 person",
    image: "/images/products/saunas/clearlight-od2.png",
    specs: "57\"W x 52\"D x 80\"H | 765 lbs | 240V / 2,400W",
    features: [
      "TrueWave carbon/ceramic far infrared + full spectrum heaters",
      "Near, mid, and far infrared wavelengths simultaneously",
      "iOS/Android smartphone app control",
      "Lowest EMF/ELF levels in the industry",
      "Medical grade chromotherapy (96 LEDs, 12 colors)",
      "Engineered wood exterior, mahogany interior",
      "Double-wall tongue-and-groove insulation",
      "36-hour programmable timer",
      "Outdoor cover included",
      "Limited lifetime component warranty / 5-year cabin warranty",
    ],
    highlights: [
      { label: "Spectrum", value: "Full (Near/Mid/Far)" },
      { label: "EMF", value: "Lowest in Industry" },
      { label: "Control", value: "Smartphone App" },
      { label: "Warranty", value: "Lifetime Components" },
    ],
  },
  {
    name: "Clearlight Sanctuary Outdoor 5",
    slug: "clearlight-sanctuary-outdoor-5",
    category: "outdoor-saunas",
    brand: "Clearlight",
    description:
      "Full spectrum outdoor infrared sauna for 4\u20135 people. Engineered wood exterior with mahogany interior, TrueWave heaters, smartphone control, and recline/flat bench option. Outdoor cover included.",
    longDescription:
      "The Sanctuary Outdoor 5 brings the Clearlight full spectrum experience to a spacious 4\u20135 person format designed for outdoor installation. TrueWave far infrared heaters on the back and side walls combine with a full spectrum front-wall heater to deliver near, mid, and far infrared wavelengths. The interior features a generous 72.75\u201D recline/flat bench, rich mahogany wood, and double-pane glass windows throughout. The engineered wood exterior and double-wall tongue-and-groove insulation provide weather resistance and heat retention. Control sessions from the digital panel, the 36-hour programmable timer, or the iOS/Android smartphone app. The built-in door handle doubles as a smartphone cradle with a charging station and audio jack. Medical grade chromotherapy, halotherapy, vibrational resonance therapy, and red light therapy are available as upgrades. An outdoor cover is included, and the sauna is backed by a limited lifetime component warranty with 5 years on the cabin.",
    capacity: "4-5 person",
    image: "/images/products/saunas/clearlight-od5.jpg",
    specs: "82\"W x 52\"D x 80\"H | 1,050 lbs | 240V / 3,800W",
    features: [
      "TrueWave carbon/ceramic far infrared + full spectrum heaters",
      "Near, mid, and far infrared wavelengths simultaneously",
      "iOS/Android smartphone app control",
      "Lowest EMF/ELF levels in the industry",
      "Engineered wood exterior, mahogany interior",
      "72.75\u201D recline/flat bench",
      "Double-pane glass windows and 8mm glass door",
      "36-hour programmable timer",
      "Built-in charging station and audio jack",
      "Outdoor cover included",
      "Limited lifetime component warranty / 5-year cabin warranty",
    ],
    highlights: [
      { label: "Capacity", value: "4\u20135 people" },
      { label: "Spectrum", value: "Full (Near/Mid/Far)" },
      { label: "Control", value: "Smartphone App" },
      { label: "Warranty", value: "Lifetime Components" },
    ],
  },
];

export const indoorSaunas: Product[] = [
  {
    name: "Jacuzzi JS-1i Infrared Sauna",
    slug: "jacuzzi-js-1i",
    category: "indoor-saunas",
    brand: "Jacuzzi",
    description:
      "Personal 1-person infrared sauna with high-intensity red light therapy, far infrared and full spectrum heaters, chiropractor-designed ergonomic backrest, and vibrational resonance therapy. Plug into any standard 120V outlet.",
    longDescription:
      "The Jacuzzi JS-1i delivers a complete infrared wellness experience in a compact single-person format. Combination mica/carbon low-EMF far infrared heaters provide soothing warmth, while full spectrum heaters deliver near, mid, and far infrared wavelengths for deeper therapeutic benefits. High-intensity red light therapy is included in every session to support skin health and recovery. The chiropractor-designed ergonomic backrest provides proper lumbar support throughout your session, and vibrational resonance therapy (VRT) combines sound and vibration for enhanced relaxation. Connect your devices via Bluetooth or auxiliary input and enjoy the built-in subwoofer. Heavy-duty construction with metal threshold, upgraded hinges, and a replaceable solid wood floor ensure years of reliable use. Runs on a standard 120V household outlet \u2014 no special wiring required. Backed by a 5-year comprehensive warranty.",
    capacity: "1 person",
    image: "/images/products/saunas/jacuzzi-js1i.png",
    specs: "45\"L x 50\"W x 78\"H | 510 lbs | 120V / 2,100W",
    features: [
      "Far infrared mica/carbon low-EMF heaters",
      "Full spectrum heaters (near, mid, far infrared)",
      "High-intensity red light therapy in every session",
      "Chiropractor-designed ergonomic backrest",
      "Vibrational resonance therapy (VRT) standard",
      "Bluetooth and AUX audio with built-in subwoofer",
      "Standard 120V outlet \u2014 no special wiring needed",
      "Heavy-duty construction with metal threshold",
      "Replaceable solid wood floor",
      "5-year comprehensive warranty",
    ],
    highlights: [
      { label: "Spectrum", value: "Full (Near/Mid/Far)" },
      { label: "Therapy", value: "Red Light + VRT" },
      { label: "Power", value: "120V Plug-In" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
  {
    name: "Jacuzzi JS-2i Infrared Sauna",
    slug: "jacuzzi-js-2i",
    category: "indoor-saunas",
    brand: "Jacuzzi",
    description:
      "2-person infrared sauna with high-intensity red light therapy, full spectrum heaters, Bluetooth audio with subwoofer, and heavy-duty construction. 240V for powerful, consistent heating.",
    longDescription:
      "The Jacuzzi JS-2i brings full-spectrum infrared wellness to a comfortable two-person format. Mica/carbon low-EMF far infrared heaters and full spectrum heaters work together to deliver near, mid, and far infrared wavelengths for deep therapeutic warmth. High-intensity red light therapy is built into every session, promoting skin health, circulation, and recovery. The chiropractor-designed ergonomic backrest provides proper support, while the Bluetooth audio system with subwoofer lets you create your ideal relaxation atmosphere. Heavy-duty construction features a metal threshold, upgraded hinges, and a replaceable solid wood floor built for years of daily use. Runs on 240V for powerful, consistent heating performance. Backed by a 5-year comprehensive warranty.",
    capacity: "2 person",
    image: "/images/products/saunas/jacuzzi-js2i.png",
    specs: "54\"L x 50\"W x 78\"H | 610 lbs | 240V / 2,340W",
    features: [
      "Far infrared mica/carbon low-EMF heaters",
      "Full spectrum heaters (near, mid, far infrared)",
      "High-intensity red light therapy in every session",
      "Chiropractor-designed ergonomic backrest",
      "Bluetooth and AUX audio with built-in subwoofer",
      "Heavy-duty construction with metal threshold",
      "Replaceable solid wood floor",
      "240V for powerful, consistent heating",
      "5-year comprehensive warranty",
    ],
    highlights: [
      { label: "Capacity", value: "2 people" },
      { label: "Spectrum", value: "Full (Near/Mid/Far)" },
      { label: "Therapy", value: "Red Light" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
  {
    name: "Jacuzzi JS-3i Infrared Sauna",
    slug: "jacuzzi-js-3i",
    category: "indoor-saunas",
    brand: "Jacuzzi",
    description:
      "Spacious 3-person infrared sauna with high-intensity red light therapy, full spectrum heaters, vibrational resonance therapy, and enhanced Bluetooth audio. The largest Jacuzzi indoor sauna.",
    longDescription:
      "The Jacuzzi JS-3i is the largest model in the Jacuzzi indoor sauna lineup, offering a spacious three-person interior for shared wellness sessions. Full spectrum heaters deliver near, mid, and far infrared wavelengths while mica/carbon low-EMF far infrared heaters provide consistent soothing warmth. High-intensity red light therapy is integrated into every session for skin health and recovery benefits. Vibrational resonance therapy (VRT) combines sound and vibration to deepen relaxation. The enhanced Bluetooth audio system with subwoofer fills the cabin with immersive sound, and a built-in charging station keeps your devices powered. The chiropractor-designed ergonomic backrest, heavy-duty metal threshold, upgraded hinges, and replaceable solid wood floor reflect the premium construction quality. Runs on 240V for powerful heating and is backed by a 5-year comprehensive warranty.",
    capacity: "3 person",
    image: "/images/products/saunas/jacuzzi-js3i.png",
    specs: "74\"L x 50\"W x 78\"H | 710 lbs | 240V / 3,640W",
    features: [
      "Far infrared mica/carbon low-EMF heaters",
      "Full spectrum heaters (near, mid, far infrared)",
      "High-intensity red light therapy in every session",
      "Vibrational resonance therapy (VRT) standard",
      "Chiropractor-designed ergonomic backrest",
      "Enhanced Bluetooth audio with subwoofer",
      "Built-in device charging station",
      "Heavy-duty construction with metal threshold",
      "240V / 3,640W for powerful heating",
      "5-year comprehensive warranty",
    ],
    highlights: [
      { label: "Capacity", value: "3 people" },
      { label: "Therapy", value: "Red Light + VRT" },
      { label: "Audio", value: "Bluetooth + Sub" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
];

export const coldPlungeProducts: Product[] = [
  {
    name: "Jacuzzi Kodiak Cold Plunge",
    slug: "jacuzzi-kodiak-cold-plunge",
    category: "cold-plunges",
    brand: "Jacuzzi",
    description:
      "Full-range temperature control from 39\u00B0F to 104\u00B0F. Fully immersive deep soak with insulated hard shell, lockable cover, LED interior lighting, and in-line filtration. Indoor or outdoor use.",
    longDescription:
      "The Jacuzzi Kodiak Cold Plunge brings precision cold therapy to your home with a temperature range spanning 39\u00B0F all the way to 104\u00B0F \u2014 making it a true year-round wellness tool for cold plunging, contrast therapy, or warm soaking. The fully immersive deep soak design allows complete submersion for maximum therapeutic benefit. An insulated hard shell retains temperature efficiently, while the lockable cover provides security and energy savings. LED interior lighting creates a calming atmosphere during nighttime sessions. The in-line filtration system keeps water clean and clear with minimal maintenance. Designed for both indoor and outdoor installation, the Kodiak features a compact footprint that fits on patios, decks, or inside home gyms. Backed by Jacuzzi\u2019s 10-year frame and shell warranty.",
    capacity: "1 person",
    image: "/images/products/coldplunge/kodiak-cold-plunge.jpg",
    specs: "34\"L x 33\"W x 28\"H | 10-year frame & shell warranty",
    features: [
      "Temperature control from 39\u00B0F to 104\u00B0F",
      "Fully immersive deep soak design",
      "Insulated hard shell for temperature retention",
      "Lockable cover for security and energy savings",
      "LED interior lighting",
      "In-line filtration system",
      "Indoor or outdoor installation",
      "Compact footprint for patios, decks, or home gyms",
      "10-year frame and shell warranty",
    ],
    highlights: [
      { label: "Temp Range", value: "39\u00B0F \u2013 104\u00B0F" },
      { label: "Use", value: "Indoor / Outdoor" },
      { label: "Design", value: "Deep Immersion" },
      { label: "Warranty", value: "10-Year Shell" },
    ],
  },
];

export const covanaProducts: Product[] = [
  {
    name: "Covana Oasis",
    slug: "covana-oasis",
    category: "covana-covers",
    brand: "Covana",
    description:
      "Not just a hot tub cover \u2014 a fully automated gazebo. Rises in 20 seconds with a turn of the key, providing shelter from storms and UV rays, water-tight insulation, and a versatile LED lighting system.",
    longDescription:
      "The Covana Oasis transforms your hot tub into a complete outdoor retreat. With a simple turn of the key, the cover rises in just 20 seconds to become a modern, elegant gazebo that protects against storms, harmful UV rays, and provides an intimate private space. When closed, the water-tight seal reduces heating costs with superior insulation while preventing unwanted access to your spa. The naturally sloped roof design sheds water and snow accumulation for worry-free operation in all seasons. The versatile LED lighting system offers gentle transitioning colors for relaxation or vibrant modes for entertaining. Optional retractable shades add even more privacy. Available in standard and XL sizes with your choice of two roofing styles (darling or shingles) and two colors (mocha or slate). The cover alone weighs approximately 185 lbs for a sturdy, permanent installation.",
    capacity: "Fits most spas up to 98\"",
    image: "/images/products/covana/covana-oasis.jpg",
    specs: "Max 98\"L x 93\"W | 185 lbs | Standard & XL sizes",
    features: [
      "Fully automated \u2014 rises in 20 seconds with a key turn",
      "Transforms into an elegant gazebo when open",
      "Water-tight seal reduces heating costs",
      "Sloped roof sheds water and snow",
      "Versatile LED lighting system (relaxation and party modes)",
      "UV and storm protection",
      "Optional retractable privacy shades",
      "2 roofing styles and 2 color options",
      "Prevents unauthorized spa access when closed",
      "Standard and XL sizes available",
    ],
    highlights: [
      { label: "Opens In", value: "20 seconds" },
      { label: "Type", value: "Cover + Gazebo" },
      { label: "Lighting", value: "Multi-Color LED" },
      { label: "Insulation", value: "Water-Tight Seal" },
    ],
  },
  {
    name: "Covana Oasis Midnight",
    slug: "covana-oasis-midnight",
    category: "covana-covers",
    brand: "Covana",
    description:
      "The Oasis in a striking deep black finish. Same 20-second automated operation, gazebo functionality, and LED lighting \u2014 with a sleek dark aesthetic that highlights your natural surroundings.",
    longDescription:
      "The Covana Oasis Midnight Edition delivers every feature of the original Oasis in a dramatic deep black finish that creates a bold contrast against natural landscapes and modern architecture. The fully automated cover rises in 20 seconds with a turn of the key to form an elegant gazebo, providing protection from UV rays, rain, and snow. The water-tight seal minimizes heat loss and evaporation while preventing unauthorized access. The sloped roof design naturally sheds water and snow. The versatile LED lighting system transitions between relaxing color flows and vibrant entertainment modes. All the same premium engineering \u2014 just dressed in black.",
    capacity: "Fits most spas up to 98\"",
    image: "/images/products/covana/covana-oasis-midnight.jpg",
    specs: "Max 98\"L x 93\"W | 185 lbs | Midnight black finish",
    features: [
      "Striking deep black finish",
      "Fully automated \u2014 rises in 20 seconds",
      "Transforms into an elegant gazebo when open",
      "Water-tight seal reduces heating costs",
      "Sloped roof sheds water and snow",
      "Versatile LED lighting system",
      "UV and storm protection",
      "Highlights natural surroundings with dark contrast",
      "Same premium engineering as the Oasis",
    ],
    highlights: [
      { label: "Finish", value: "Midnight Black" },
      { label: "Opens In", value: "20 seconds" },
      { label: "Type", value: "Cover + Gazebo" },
      { label: "Lighting", value: "Multi-Color LED" },
    ],
  },
  {
    name: "Covana Evolution",
    slug: "covana-evolution",
    category: "covana-covers",
    brand: "Covana",
    description:
      "Sleek flat-roof automated spa cover with a modern, refined aesthetic. Intelligent modular design in 8\u2019 to 11\u2019 sizes, SIPS insulation rated over R-15, and up to 30% heating cost reduction.",
    longDescription:
      "The Covana Evolution brings a contemporary flat-roof design to the automated spa cover category. Its intelligent modular construction adapts to round, square, or rectangular spas in 8\u2019, 9\u2019, 10\u2019, and 11\u2019 sizes. The tight seal against the spa shell eliminates heat loss, water evaporation, and chemical off-gassing, reducing heating costs by up to 30%. Structural Insulated Panels (SIPS) deliver an insulation value rated over R-15 for maximum energy efficiency. With a simple turn of the key, the cover rises smoothly to provide quick access and weather protection. Available in four color combinations: mocha frame with white or latte top, and slate frame with white or platinum top \u2014 letting you match your outdoor design aesthetic.",
    capacity: "Fits round, square, or rectangular spas up to 135\"",
    image: "/images/products/covana/covana-evolution.jpg",
    specs: "Max 135\"L x 92\"W | 8\u2019-11\u2019 sizes | R-15+ insulation",
    features: [
      "Sleek contemporary flat-roof design",
      "Intelligent modular sizing (8\u2019, 9\u2019, 10\u2019, 11\u2019)",
      "SIPS insulation rated over R-15",
      "Reduces heating costs by up to 30%",
      "Automated key-turn operation",
      "Fits round, square, and rectangular spas",
      "Eliminates heat loss and chemical evaporation",
      "4 color combinations available",
      "Maximum spa length up to 135\"",
    ],
    highlights: [
      { label: "Design", value: "Flat Roof Modern" },
      { label: "Sizes", value: "8\u2019 \u2013 11\u2019" },
      { label: "Insulation", value: "R-15+ SIPS" },
      { label: "Savings", value: "Up to 30%" },
    ],
  },
  {
    name: "Covana Legend",
    slug: "covana-legend",
    category: "covana-covers",
    brand: "Covana",
    description:
      "Purpose-built for swim spas from 16\u2019 to 20\u2019. Fully automated motorized cover with exclusive geared motor for quiet, effortless operation. Airtight seal minimizes heat loss and evaporation.",
    longDescription:
      "The Covana Legend is engineered specifically for the unique demands of swim spas, available in sizes from 16\u2019 to 20\u2019. An exclusive geared motor and electronic circuit board provide quiet, smooth operation \u2014 simply turn the key and the cover gently rises to provide full access to your swim spa. When closed, the airtight seal minimizes water evaporation and heat loss with a high insulation value, protecting your investment and reducing operating costs. The sleek design maximizes personal space with a more welcoming appearance than traditional swim spa covers. Available in AC-powered (115V, 60Hz) or battery-powered configurations \u2014 the battery option eliminates the need for electrical installation entirely, providing a convenient, space-efficient solution.",
    capacity: "Swim spas 16\u2019 to 20\u2019",
    image: "/images/products/covana/covana-legend.jpg",
    specs: "Max 241\"L x 93\"W | 16\u2019-20\u2019 sizes | 115V or battery",
    features: [
      "Purpose-built for swim spas (16\u2019 to 20\u2019)",
      "Exclusive geared motor for quiet operation",
      "Fully automated key-turn activation",
      "Airtight seal minimizes heat loss and evaporation",
      "AC-powered (115V) or battery-powered option",
      "Battery option eliminates electrical installation",
      "Sleek design maximizes personal space",
      "Electronic circuit board for smooth, gentle movement",
      "High insulation value reduces operating costs",
    ],
    highlights: [
      { label: "For", value: "Swim Spas" },
      { label: "Sizes", value: "16\u2019 \u2013 20\u2019" },
      { label: "Motor", value: "Quiet Geared" },
      { label: "Power", value: "AC or Battery" },
    ],
  },
];

export const allProducts: Product[] = [
  ...jacuzziProducts,
  ...swimSpaProducts,
  ...outdoorSaunas,
  ...indoorSaunas,
  ...coldPlungeProducts,
  ...covanaProducts,
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  return allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);
}

export const categoryLabels: Record<ProductCategory, string> = {
  "hot-tubs": "Jacuzzi Hot Tubs",
  "swim-spas": "Jacuzzi Swim Spas",
  "outdoor-saunas": "Clearlight Outdoor Saunas",
  "indoor-saunas": "Jacuzzi Indoor Saunas",
  "cold-plunges": "Cold Plunges",
  "covana-covers": "Covana Automated Spa Covers",
};

export const contactSubjects: Record<ProductCategory, string> = {
  "hot-tubs": "Hot Tub Quote",
  "swim-spas": "Hot Tub Quote",
  "outdoor-saunas": "Sauna Quote",
  "indoor-saunas": "Sauna Quote",
  "cold-plunges": "Cold Plunge Quote",
  "covana-covers": "Covana Cover Quote",
};
