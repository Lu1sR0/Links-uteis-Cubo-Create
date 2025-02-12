
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ImagePlus, ExternalLink, GalleryHorizontal } from "lucide-react";

const designs = [
  {
    title: "Logo para Restaurante",
    description: "Logo vibrante para restaurante",
    imageSrc: "/logo (2).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Açaiteria",
    description: "Logo que reflita a brasilidade da marca",
    imageSrc: "/logo (3).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Startup",
    description: "Logo para loja de jogos online",
    imageSrc: "/logo (4).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Agência de Marketing",
    description: "Identidade visual criativa para agência de marketing",
    imageSrc: "/logo (5).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Empresa de Consultoria",
    description: "Design profissional para empresa de consultoria",
    imageSrc: "/logo (6).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Loja de Eletrônicos",
    description: "Identidade visual tecnológica para loja de eletrônicos",
    imageSrc: "/logo (7).jpg",
    category: "Logo",
  },
  {
    title: "Logo para loja de Iphone",
    description: "Design robusto para empresa de construção",
    imageSrc: "/logo (8).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Empresa de topografia",
    description: "Identidade visual confiável para clínica médica",
    imageSrc: "/logo (9).jpg",
    category: "Logo",
  },
  {
    title: "Logo para empresa de refrigeração",
    description: "Design educativo para escola",
    imageSrc: "/logo (10).jpg",
    category: "Logo",
  },
  {
    title: "Logo para loja de soverte",
    description: "Identidade visual moderna para empresa de software",
    imageSrc: "/logo (11).jpg",
    category: "Logo",
  },
  {
    title: "Logo para empresa de limpadores de vidro",
    description: "Design acolhedor para café",
    imageSrc: "/logo (12).jpg",
    category: "Logo",
  },
  {
    title: "Logo para o Dj Boy",
    description: "Identidade visual enérgica para academia",
    imageSrc: "/logo (13).jpg",
    category: "Logo",
  },
  {
    title: "Logo para loja de materias de construção",
    description: "Design festivo para empresa de eventos",
    imageSrc: "/logo (14).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Universidade",
    description: "Identidade visual divertida para loja de brinquedos",
    imageSrc: "/logo (15).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Empresa de refrigeração",
    description: "Design dinâmico para empresa de transporte",
    imageSrc: "/logo (16).jpg",
    category: "Logo",
  },
  {
    title: "Logo para empresa de carros",
    description: "Identidade visual estilosa para empresa de moda",
    imageSrc: "/logo (17).jpg",
    category: "Logo",
  },
  {
    title: "Logo para Empreiteira",
    description: "Design apetitoso para empresa de alimentação",
    imageSrc: "/logo (18).jpg",
    category: "Logo",
  },
];

const Design = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("Logo");

  const categories = ["Logo"];
  const filteredDesigns = selectedCategory === "Logo" 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  return (
    <div className="min-h-screen p-6 fade-in bg-gradient-to-br from-white via-blue-50 to-primary/5 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-center mb-8">
          <div className="relative group animate-float">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-600 to-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src="/lovable-uploads/0b8bc10c-c1db-4d5b-a3fd-ababd063e8b1.png" 
              alt="Logo" 
              className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-transparent bg-clip-text">
            Nossa Galeria
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Explore nossa coleção de designs inovadores e criativos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/80 text-gray-600 hover:bg-primary/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDesigns.map((design, index) => (
            <div
              key={design.title}
              className="group relative overflow-hidden rounded-2xl glass-card hover-scale"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-600/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative aspect-[4/3]">
                <img
                  src={design.imageSrc}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-primary/90 rounded-full">
                      {design.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                    {/* <p className="text-sm text-gray-200">{design.description}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            onClick={() => navigate("/orcamento")}
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg rounded-xl flex items-center gap-2 w-full sm:w-auto"
          >
            <ExternalLink className="w-5 h-5" />
            Solicitar Orçamento
          </Button>
        
        </div>
      </div>
    </div>
  );
};

export default Design;
