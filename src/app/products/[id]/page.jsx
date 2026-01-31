import Link from "next/link";
import styles from "./product.module.css";
import DESCRIPTIONS from "../../../data/productDescriptions";
import ProductHero from "@/components/product-detail/ProductHero";
import KeyFeatures from "@/components/product-detail/KeyFeatures";
import ProductUses from "@/components/product-detail/ProductUses";
import Precautions from "@/components/product-detail/Precautions";

const PRODUCTS = {
  prod_001: {
    id: "prod_001",
    name: "Guar Gum",
    image: "/images/Guar-gum.png",
    subtitle:
      "Natural hydrocolloid from guar seeds used as a thickener, stabilizer and emulsifier.",
    quickNote:
      "White to off-white powder. Soluble in cold water; forms highly viscous solutions.",
    keyFeatures: [
      "Plant-derived galactomannan from guar seeds",
      "Forms highly viscous solutions at low concentrations",
      "Used as thickener, stabilizer in food and industrial applications",
      "Prevents syneresis in dairy desserts and frozen products",
      "Essential for gluten-free baking formulations",
      "Cost-effective with tunable functional grades",
      "Widely used in oil & gas drilling fluids",
    ],
    uses: [
      "Food: dairy, sauces, bakery, gluten-free formulations.",
      "Oil & Gas: drilling fluids and fracturing.",
      "Cosmetics: creams, shampoos and lotions.",
      "Pharma: tablet binder and controlled-release matrices.",
    ],
    types: [
      "Native Guar Gum",
      "Hydroxypropyl Guar (HPG)",
      "Guar Splits / Meal",
      "Enzyme-treated guars",
    ],
    specs: [
      "Viscosity (1% w/v at 25°C): 3000–6000 mPa·s",
      "Moisture: < 12%",
      "pH (1% solution): 5.5–8.0",
    ],
  },
  prod_002: {
    id: "prod_002",
    name: "Xanthan Gum",
    image: "/images/xanthan-gum.png",
    subtitle:
      "A high-performance microbial polysaccharide produced by Xanthomonas campestris; excellent thickening and stabilizing properties.",
    quickNote:
      "Used for its pseudoplastic (shear-thinning) behavior and stability over broad pH and temperature ranges.",
    keyFeatures: [
      "High-performance fermentation-derived polysaccharide",
      "Exhibits pseudoplastic (shear-thinning) behavior",
      "Stable across broad pH range (2–12)",
      "Effective at small usage rates (0.05–1.0% w/w)",
      "Excellent freeze-thaw cycle stability",
      "Compatible with other hydrocolloids for synergistic effects",
      "Available in multiple grades (food, pharma, industrial)",
    ],
    uses: [
      "Food: sauces, dressings, gluten-free baking.",
      "Personal care: lotions and gels.",
      "Oil & Gas: polymer additive in drilling fluids.",
    ],
    types: ["Food grade", "Pharmaceutical grade", "Industrial grade"],
    specs: [
      "Viscosity (1% w/v at 25°C): 400–2000 mPa·s (varies by grade)",
      "Moisture: < 10%",
      "pH stability: 2–12",
    ],
  },
  prod_003: {
    id: "prod_003",
    name: "Tragacanth Gum",
    image: "/images/Tragacanth-gum.png",
    subtitle:
      "Natural exudate gum obtained from Astragalus species; used as emulsifier, stabilizer and suspending agent.",
    quickNote:
      "Forms viscous gels and is commonly used in pharmaceuticals, food and textile industries.",
    keyFeatures: [
      "Natural exudate from Astragalus species",
      "Forms viscous gels with smooth mouthfeel",
      "Hydrates more slowly than seed gums",
      "Used as suspending agent in pharmaceuticals",
      "Ideal for specialty confectioneries",
      "Requires careful milling for consistency",
      "Natural profile for clean label products",
    ],
    uses: [
      "Pharmaceuticals: suspending agent in oral and topical formulations.",
      "Food: stabilizer in confections and sauces.",
      "Textiles & Ceramics: binder and thickener.",
    ],
    types: ["Powdered tragacanth", "Water-dispersible grades"],
    specs: ["Moisture: < 12%", "pH: typically neutral"],
  },
  prod_004: {
    id: "prod_004",
    name: "Guar Meal",
    image: "/images/Guar-Meal.jpg",
    subtitle:
      "By-product of guar processing; protein-rich meal commonly used in animal feed and industrial formulations.",
    quickNote:
      "High protein content makes it suitable for cattle and poultry feed; also used as organic soil amendment.",
    keyFeatures: [
      "Nutrient-rich byproduct of guar gum extraction",
      "High protein content (40–45% crude protein)",
      "Excellent protein source for animal feed",
      "Suitable for ruminants, poultry and aquaculture",
      "Can serve as organic soil amendment",
      "Economical and sustainable feedstuff",
      "Contributes energy and digestible fiber",
    ],
    uses: [
      "Animal feed: protein supplement.",
      "Fertilizer/Soil amendment.",
      "Industrial: binder in certain formulations.",
    ],
    types: ["Dehusked meal", "Split meal"],
    specs: ["Protein: typically 40–45%", "Moisture: < 12%"],
  },
  prod_005: {
    id: "prod_005",
    name: "Roasted Guar",
    image: "/images/Rosted-guar.png",
    subtitle:
      "Roasted or heat-treated guar with modified flavor and functional properties for specialty applications.",
    quickNote:
      "Roasting can alter solubility and color; used in specialty food blends and niche industrial uses.",
    keyFeatures: [
      "Controlled heat treatment for specialty applications",
      "Develops characteristic nutty or toasty flavor",
      "Alters solubility and hydration properties",
      "Modified color and appearance vs. native guar",
      "Suitable for specialty beverage blends",
      "Used in artisanal snacks and regional recipes",
      "Requires formulation trials for substitution",
    ],
    uses: ["Specialty food blends", "Flavor-modified formulations"],
    types: ["Light roasted", "Dark roasted"],
    specs: ["Moisture: < 12%", "Color/odor: grade-dependent"],
  },
  prod_006: {
    id: "prod_006",
    name: "Gum Arabica (Acacia Gum)",
    image: "/images/Gum-arabic.png",
    subtitle:
      "Natural exudate from Acacia trees; excellent emulsifier and stabilizer used widely in food and beverage industries.",
    quickNote:
      "Commonly used in soft drinks, confectionery, and for encapsulation of flavors and oils.",
    keyFeatures: [
      "Natural exudate from Acacia trees",
      "Excellent emulsifier and stabilizer",
      "High water solubility with low viscosity",
      "Ideal for beverage emulsions and flavor encapsulation",
      "Used in confectionery for texture improvement",
      "Compatible with wide range of active ingredients",
      "Clean sensory profile for premium applications",
    ],
    uses: [
      "Beverages: emulsifier and stabilizer (soft drinks, juices).",
      "Confectionery: nougat, icings.",
      "Pharma & Cosmetics: binder and stabilizer.",
    ],
    types: ["Acacia senegal", "Acacia seyal"],
    specs: ["Solubility: high", "Moisture: < 12%"],
  },
};

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = PRODUCTS[id];
  const description = DESCRIPTIONS?.[id] ?? product?.description;

  if (!product) {
    return (
      <div className={styles.container}>
        <h2>Product not found</h2>
        <p>The requested product does not exist in this demo.</p>
        <p>
          <Link href="/products">Back to products</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ProductHero
        product={product}
        description={description}
        styles={styles}
      />

      <section className={styles.details}>
        <KeyFeatures features={product.keyFeatures} styles={styles} />
        <ProductUses uses={product.uses} styles={styles} />
        <Precautions styles={styles} />
      </section>
    </div>
  );
}

