import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Brownstone Facade Restoration",
    description:
      "Restored a historic brownstone facade, preserving the architectural elegance while improving durability and appearance.",
    details:
      "This project carefully restored the brownstone facade using matching materials and traditional masonry techniques. The result preserves the original character while enhancing long-term durability against weather.",
    badges: ["Restoration", "Brownstone", "Facade"],
    features: [
      "High-quality sealant for weather protection",
      "Preserved original architectural details",
      "Enhanced structural integrity",
    ],
    testimonial:
      "Our brownstone looks stunning! The restoration work was flawless. Couldn't be happier.",
    image: "/projects/img.png",
  },
  {
    id: 2,
    title: "Concrete Staircase with Railings",
    description:
      "Constructed sturdy concrete stairs with custom iron railings for residential entryways.",
    details:
      "A custom concrete staircase was poured with attention to drainage and non-slip finish, paired with bespoke iron railings for style and safety. The installation improves accessibility and adds a durable, low-maintenance entry feature.",
    badges: ["Stairs", "Concrete", "Ironwork"],
    features: [
      "Non-slip concrete finish for added safety",
      "Durable iron railings with custom design",
      "Weather-resistant coating for longevity",
    ],
    testimonial:
      "The new stairs are both beautiful and functional. Excellent job!",
    image: "/projects/img-1.png",
  },
  {
    id: 3,
    title: "Brick Front Stairs Installation",
    description:
      "Built a set of brick stairs with concrete treads, blending aesthetics and durability.",
    details:
      "Brick stairs were constructed with precision-laid brickwork and reinforced concrete treads for a balance of beauty and longevity. This gives a classic aesthetic while ensuring stable footing through seasonal changes.",
    badges: ["Brickwork", "Stairs", "Residential"],
    features: [
      "Classic brick design for timeless appeal",
      "Concrete treads for added durability",
      "Precision craftsmanship for a seamless finish",
    ],
    testimonial: "",
    image: "/projects/img-2.png",
  },
  {
    id: 4,
    title: "Flat Roof Waterproofing",
    description:
      "Performed a complete waterproofing project on a flat roof using high-grade materials.",
    details:
      "The flat roof received a premium waterproof membrane and improved drainage to prevent pooling and leaks. UV-resistant coatings were applied to extend the membrane life and reduce maintenance needs.",
    badges: ["Roofing", "Waterproofing", "Flat Roof"],
    features: [
      "Installed premium waterproof membrane",
      "Improved drainage system for longevity",
      "UV-resistant coating to prevent sun damage",
    ],
    testimonial: "No more leaks! The waterproofing was done perfectly.",
    image: "/projects/img-3.png",
  },
  {
    id: 5,
    title: "Curved Brick Wall Restoration",
    description:
      "Restored a curved brick wall, ensuring structural integrity while enhancing aesthetics.",
    details:
      "The curved brick wall was carefully dismantled and rebuilt where needed with matching brick and mortar to retain its original profile. Structural reinforcement was added discreetly to ensure the wall remains stable for decades.",
    badges: ["Brickwork", "Restoration", "Curved Wall"],
    features: [
      "Precision brick matching for seamless repair",
      "Reinforced structural support",
      "Restored original curved design",
    ],
    testimonial: "",
    image: "/projects/img-4.png",
  },
  {
    id: 6,
    title: "Concrete Front Stoop Resurfacing",
    description:
      "Completed a front stoop resurfacing project, providing a smooth finish.",
    details:
      "The existing stoop was repaired and resurfaced with a durable overlay to restore a smooth, uniform appearance. A weather-resistant sealant was applied to protect against freeze-thaw damage and staining.",
    badges: ["Stoops", "Resurfacing", "Concrete"],
    features: [
      "Durable resurfacing for extended lifespan",
      "Non-slip surface for safety",
      "Weather-resistant coating",
    ],
    testimonial: "Our stoop looks brand new! The team did an excellent job.",
    image: "/projects/img-5.png",
  },
  {
    id: 7,
    title: "Historic Staircase Renovation",
    description: "Renovated a historic staircase, retaining its classic charm.",
    details:
      "This renovation reinforced the staircase structure while preserving original design elements and finishes. Careful restoration preserved historic details and improved safety with modern structural supports.",
    badges: ["Restoration", "Stairs", "Historic"],
    features: [
      "Reinforced structure for durability",
      "Restored original handrails",
      "New concrete overlay for a polished look",
    ],
    testimonial: "",
    image: "/projects/img-6.png",
  },
  {
    id: 8,
    title: "Modern Interior Wall Finish",
    description:
      "Applied a modern finish to interior walls for a minimalist look.",
    details:
      "Interior walls received a smooth, modern finish with high-quality, quick-drying materials for a clean minimalist look. Insulation and finish techniques were used to improve acoustics and durability.",
    badges: [ "Finishing", "Modern Design"],
    features: [
      "Smooth finish with high-quality materials",
      "Quick-drying paint for efficiency",
      "Noise-reducing insulation",
    ],
    testimonial:
      "The walls look perfect now! The modern finish is just what we wanted.",
    image: "/projects/img-7.png",
  },
  {
    id: 9,
    title: "Sidewalk Replacement with Tree Pit Integration",
    description:
      "Upgraded sidewalks with integrated tree pits for sustainable urban design.",
    details:
      "New sidewalks were poured with integrated tree pits to support urban greenery and manage stormwater. The design balances pedestrian safety with ecological benefits and long-term durability.",
    badges: ["Sidewalk", "Urban Landscaping", "Concrete"],
    features: [
      "Eco-friendly design with tree pits",
      "Slip-resistant concrete finish",
      "Durable for high foot traffic",
    ],
    testimonial: "",
    image: "/projects/img-8.png",
  },
  {
    id: 10,
    title: "Front Porch Concrete Resurfacing",
    description: "Refurbished a front porch with a fresh concrete layer.",
    details:
      "The porch received a new concrete overlay and protective sealant to restore appearance and resist weathering. Careful finishing ensures a slip-resistant, welcoming entrance.",
    badges: ["Concrete", "Resurfacing", "Porch"],
    features: [
      "Smooth concrete overlay for a new look",
      "Protective sealant for weather resistance",
      "Enhanced surface durability",
    ],
    testimonial:
      "Our porch has never looked better! Thanks for the great work.",
    image: "/projects/img-9.png",
  },
  {
    id: 11,
    title: "Stoop & Entrance Renovation",
    description: "Updated a residential stoop with a durable concrete finish.",
    details:
      "The entrance was renovated with a durable concrete finish designed for heavy foot traffic and low maintenance. Improved drainage and surface texture increase safety and longevity.",
    badges: ["Stoops", "Concrete", "Residential"],
    features: [
      "Durable finish for high foot traffic",
      "Improved aesthetic appeal",
      "Non-slip surface for safety",
    ],
    testimonial: "",
    image: "/projects/img-10.png",
  },
  {
    id: 12,
    title: "Brick Wall Repair & Patching",
    description:
      "Expert patching of brick walls to restore structural integrity.",
    details:
      "Targeted brick patching restored damaged areas with matching materials to blend seamlessly with the existing facade. Repointing and mortar repair improved structural resilience and weather protection.",
    badges: ["Brickwork", "Wall Repair", "Exterior"],
    features: [
      "Matched original brickwork for consistency",
      "Long-lasting mortar application",
      "Enhanced wall stability",
    ],
    testimonial: "",
    image: "/projects/img-11.png",
  },
  {
    id: 13,
    title: "Multi-Level Staircase Redesign",
    description: "Redesigned a multi-level staircase with concrete steps.",
    details:
      "The redesign introduced modern concrete steps with reinforced structure and custom handrails for safety and style. The updated layout improved circulation and gave the staircase a contemporary appearance.",
    badges: ["Stairs", "Redesign", "Concrete"],
    features: [
      "Modern concrete steps for a fresh look",
      "Reinforced structure for safety",
      "Custom handrails for enhanced aesthetics",
    ],
    testimonial:
      "The staircase redesign is just stunning. Truly transformative!",
    image: "/projects/img-12.png",
  },
  {
    id: 14,
    title: "Sidewalk & Landscaping Enhancement",
    description: "Installed a new concrete sidewalk with tree pits.",
    details:
      "This enhancement combined durable sidewalks with integrated tree pits to support urban greenery and pedestrian safety. The result improves curb appeal while addressing stormwater and root management.",
    badges: ["Sidewalk", "Urban Landscaping", "Concrete"],
    features: [
      "Tree pits integrated for greenery",
      "Slip-resistant surface",
      "Durable for urban environments",
    ],
    testimonial: "",
    image: "/projects/img-13.png",
  },
  {
    id: 15,
    title: "Concrete Steps with Ornamental Railings",
    description: "Installed concrete steps with decorative iron railings.",
    details:
      "Concrete steps were formed with precision and paired with ornamental iron railings for a refined entrance. Weather-resistant coatings ensure both beauty and long-term performance.",
    badges: ["Stairs", "Concrete", "Ironwork"],
    features: [
      "Elegant railings for added charm",
      "Sturdy concrete steps for durability",
      "Weather-resistant coating",
    ],
    testimonial: "",
    image: "/projects/img-14.png",
  },
{
  id: 20,
  title: "Basement Floor Cleanup",
  description: "Floor cleaning and preparation for renovation.",
  details: "The floor was swept and cleaned, preparing it for further work. Minor debris was cleared to ensure the surface is ready for any new installations or coating.",
  badges: ["Cleaning", "Preparation", "Flooring", "Interior"],
  features: [
    "Thorough floor cleaning",
    "Debris removal",
    "Ready for further renovation"
  ],
  testimonial: "",
  image: "/projects/img-20.png"
},
{
  id: 21,
  title: "Basement Wall Painting",
  description: "Fresh coat of paint applied to basement walls.",
  details: "The basement walls were prepped and primed before applying a fresh coat of white paint, brightening the space and ensuring moisture resistance.",
  badges: ["Painting", "Basement", "Moisture Resistance", "Interior"],
  features: [
    "White paint for a clean look",
    "Moisture-resistant finish",
    "Brightens basement area"
  ],
  testimonial: "",
  image: "/projects/img-21.png"
},
{
  id: 22,
  title: "Drywall Framing",
  description: "Installation of wooden framing for drywall.",
  details: "Wooden framing was carefully measured and installed, providing structure for the drywall in the ongoing renovation of the space.",
  badges: ["Framing", "Woodwork", "Drywall", "Interior"],
  features: [
    "Sturdy wooden framing",
    "Precise measurements for drywall fitting",
    "Supports drywall installation"
  ],
  testimonial: "",
  image: "/projects/img-22.png"
},
{
  id: 23,
  title: "Concrete Floor Pouring",
  description: "Pouring concrete for the basement floor.",
  details: "The floor was prepared with rebar and plastic sheets for moisture prevention. Concrete was mixed and poured into the designated areas to form a solid foundation.",
  badges: ["Concrete", "Flooring", "Renovation", "Interior"],
  features: [
    "Rebar for extra strength",
    "Plastic sheets for moisture protection",
    "Solid concrete foundation"
  ],
  testimonial: "",
  image: "/projects/img-23.png"
},
{
  id: 24,
  title: "Basement Wall Painting Touch-Up",
  description: "Final coat and touch-up of basement wall painting.",
  details: "The basement walls received an additional coat of paint for a smooth, even finish. Touch-ups were done to ensure no gaps or uneven areas.",
  badges: ["Painting", "Touch-Up", "Finishing", "Interior"],
  features: [
    "Smooth and even finish",
    "Additional coat for durability",
    "Touch-ups to perfect appearance"
  ],
  testimonial: "",
  image: "/projects/img-24.png"
},
{
  id: 25,
  title: "Basement Wall Prepping and Painting",
  description: "Preparation and application of paint on basement brick walls.",
  details: "The brick walls in the basement were first cleaned and prepped. Then, a protective white paint was applied to improve the aesthetic and durability of the walls, preventing moisture penetration.",
  badges: ["Painting", "Wall Prep", "Moisture Resistance", "Interior"],
  features: [
    "Cleaning and prepping for smooth application",
    "Durable and moisture-resistant paint",
    "Fresh and bright appearance for the basement"
  ],
  testimonial: "",
  image: "/projects/img-25.png"
}



];

export default projects;
