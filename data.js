// Add new land by copying an object here.
// Photos should live in /assets/...
// status examples: "Acquired", "Planning", "Permitting", "In Development", "Coming Soon"

export const developments = [
  {
    id: "dev-001",
    name: "Avalon Avenue Development",
    address: "1312 Avalon Ave. Albany, GA 31707",
    county: "Dougherty",
    acreage: "0.29 acres",
    status: "Planning",
    heroImage: "albany1.jpg",
    gallery: ["albany1.jpg", "albany2.jpg"],
    overview:
      "A high-potential tract positioned for long-term value through thoughtful planning and phased development.",
    vision:
      "To be developed into affordable housing for college students.",
    timeline: [
      "Acquisition completed",
      "Planning and feasibility phase",
      "Next: permitting and site preparation"
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6798.667751607454!2d-84.185164225641!3d31.56989094469599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f2794b84357c3b%3A0xa13c499f470731e3!2s1312%20Avalon%20Ave%2C%20Albany%2C%20GA%2031707!5e0!3m2!1sen!2sus!4v1766118349847!5m2!1sen!2sus"
  
},

{
    id: "dev-002",
    name: "Rio Grande Tract",
    address: "LOT 51 OF BLOCK 0 OF RIO GRANDE RANCES, UNIT 13",
    county: "Costilla",
    acreage: "5 acres",
    status: "Planning",
    heroImage: "IMG_3295.PNG",
    gallery: ["IMG_3295.PNG", "IMG_3291.PNG","IMG_3293.PNG","IMG_3294.PNG","IMG_3297.PNG"],
    overview:
      "A high-potential tract positioned for long-term value through thoughtful planning and phased development.",
    vision:
      "To be developed into a quiet vacation rental to unplug.",
    timeline: [
      "Acquisition completed",
      "Planning and feasibility phase",
      "Next: permitting and site preparation"
    ],
    mapUrl:
      "https://www.google.com/maps?q=Rio+Grande+Ranches,+San+Luis+CO+81152&output=embed"
  }

];

export const rentals = [
  {
    id: "rent-001",
    name: "Future Rental Albany",
    address: "1312 Avalon Ave. Albany, GA 31707",
    county: "Dougherty",
    acreage: "0.29",
    status: "Coming Soon",
    // Use a sketch/concept image here
    heroImage: "albanyrender.png",
    gallery: ["albanyrender.png"],
    overview:
      "Keep up with our first rental offering in Albany, GA.",
    vision:
      "Planned for future short-term and/or long-term rental use, depending on the final site strategy.",
    timeline: ["Coming Soon"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6798.667751607454!2d-84.185164225641!3d31.56989094469599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f2794b84357c3b%3A0xa13c499f470731e3!2s1312%20Avalon%20Ave%2C%20Albany%2C%20GA%2031707!5e0!3m2!1sen!2sus!4v1766118349847!5m2!1sen!2sus" // optional
  }
];
