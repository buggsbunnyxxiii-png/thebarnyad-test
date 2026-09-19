import React from "react";

type PageData = {
  title: string;
  subtitle: string;
  sections: {heading:string; body:string}[];
  image?: string;
};

const pages: Record<string, PageData> = {
  "barn-homes": {
    title:"Barn Homes",
    subtitle:"Timeless post and beam residences inspired by classic barn architecture.",
    image:"/images/hero-interior.jpg",
    sections:[
      {heading:"Traditional character, modern living", body:"Explore custom homes that combine open spaces, handcrafted details, and the warmth of timber construction."},
      {heading:"Designed around your lifestyle", body:"Each residence is developed with architectural flexibility, allowing unique layouts, finishes, and personal expression."}
    ]
  },
  "coastal-homes": {
    title:"Coastal Homes",
    subtitle:"Custom residences designed for waterfront landscapes and relaxed living.",
    image:"/images/kitchen.jpg",
    sections:[
      {heading:"Homes shaped by their surroundings", body:"Coastal designs emphasize natural light, views, indoor-outdoor connections, and enduring materials."}
    ]
  },
  "contemporary-homes": {
    title:"Contemporary Homes",
    subtitle:"Clean lines, open spaces, and modern architectural expression.",
    sections:[{heading:"Modern craftsmanship",body:"Contemporary designs blend innovative planning with the precision of traditional building methods."}]
  },
  "cottages": {
    title:"Cottages",
    subtitle:"Thoughtfully designed cottages with comfort, beauty, and efficiency.",
    sections:[{heading:"Simple living. Beautifully designed.",body:"Cottage collections provide carefully planned homes for different lifestyles and settings."}]
  },
  "farmhouses": {title:"Farmhouses",subtitle:"Classic farmhouse-inspired homes with handcrafted details.",sections:[{heading:"Heritage meets modern function",body:"Designed for gathering, comfort, and connection with the surrounding landscape."}]},
  "mountain-homes": {title:"Mountain Homes",subtitle:"Retreats created for scenic landscapes and natural environments.",sections:[{heading:"Built for the view",body:"Large openings, strong materials, and thoughtful layouts celebrate mountain settings."}]},
  "carriage-houses": {title:"Carriage Houses",subtitle:"Flexible spaces for guests, storage, and additional living areas.",sections:[{heading:"Versatile design",body:"Custom solutions adapt traditional carriage house concepts for today's needs."}]},
  "the-cove": {title:"The Cove",subtitle:"A homestead cottage collection design.",sections:[{heading:"Explore the collection",body:"A refined cottage concept combining efficient planning and timeless character."}]},
  "the-croft": {title:"The Croft",subtitle:"A welcoming cottage residence.",sections:[{heading:"Designed for everyday living",body:"Warm interiors and practical spaces create a comfortable home experience."}]},
  "the-haven": {title:"The Haven",subtitle:"A peaceful cottage retreat.",sections:[{heading:"Comfort and simplicity",body:"A design focused on connection, relaxation, and beautiful surroundings."}]},
  "the-nook": {title:"The Nook",subtitle:"A compact yet thoughtful cottage design.",sections:[{heading:"Small footprint, complete experience",body:"Every space is carefully considered for functionality and comfort."}]},
  "the-retreat": {title:"The Retreat",subtitle:"A private escape inspired by nature.",sections:[{heading:"A place to recharge",body:"Designed for quiet moments and memorable gatherings."}]},
  "the-ridge": {title:"The Ridge",subtitle:"A cottage collection inspired by elevated landscapes.",sections:[{heading:"Built with purpose",body:"Balanced proportions and timeless materials create a lasting residence."}]},
};

const defaults: Record<string,PageData> = {
"our-history":{title:"Our History",subtitle:"Decades of craftsmanship and innovation.",sections:[{heading:"Yankee Barn Homes",body:"A story of custom home building, architectural collaboration, and craftsmanship."}]},
"about-yankee-barn-homes":{title:"About Yankee Barn Homes",subtitle:"Custom homes built with precision and character.",sections:[{heading:"The difference",body:"A combination of design expertise, craftsmanship, and advanced building methods."}]},
"design-process":{title:"Design Process",subtitle:"From inspiration to completed home.",sections:[{heading:"Creating your vision",body:"Consultation, planning, architecture, and collaboration guide every project."}]},
"construction-process":{title:"Construction Process",subtitle:"Precision construction from factory to site.",sections:[{heading:"Quality at every stage",body:"Careful fabrication and assembly help deliver consistent results."}]}
};

export default function PageRouter(){
 const key = window.location.pathname.replace(/^\/|\/$/g,"") || "home";
 if(key==="home") return null;
 const page = pages[key] || defaults[key] || {
   title:key.replaceAll("-"," ").replace(/\b\w/g,c=>c.toUpperCase()),
   subtitle:"Explore this Yankee Barn Homes collection and resource.",
   sections:[{heading:"Craftsmanship and design",body:"Discover ideas, information, and inspiration for your custom home journey."}]
 };
 return <article className="min-h-screen bg-paper">
   <section className="relative h-[55vh] flex items-center justify-center bg-cover bg-center" style={{backgroundImage:`url(${page.image || "/images/hero-interior.jpg"})`}}>
    <div className="absolute inset-0 bg-black/35"/>
    <div className="relative text-center text-white px-6"><h1 className="text-5xl uppercase">{page.title}</h1><p className="mt-5 text-xl">{page.subtitle}</p></div>
   </section>
   <div className="max-w-5xl mx-auto px-6 py-20">
    {page.sections.map((s,i)=><section key={i} className="mb-14"><h2 className="text-3xl mb-4">{s.heading}</h2><p className="leading-8 text-lg">{s.body}</p></section>)}
    <a href="/contact" className="inline-block border px-8 py-4">Request Information</a>
   </div>
 </article>
}
