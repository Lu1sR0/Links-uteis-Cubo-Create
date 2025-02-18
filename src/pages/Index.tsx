
import { useState } from "react";
import { Paintbrush, Code, DollarSign } from "lucide-react";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    title: "Orçamento",
    description: "Entre em contato para fazer um orçamento",
    icon: DollarSign,
    path: "/orcamento",
  },
  {
    title: "Design",
    description: "Explore nossa galeria de designs e projetos",
    icon: Paintbrush,
    path: "/design",
  },
  {
    title: "Desenvolvimento Web",
    description: "Confira nosso portfólio de desenvolvimento",
    icon: Code,
    path: "https://lrportifolio.vercel.app",
    external: true,
  },

];

const Index = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 fade-in bg-gradient-to-br from-white via-blue-50 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-center mb-16">
          <div className="relative group animate-float">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-600 to-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <img 
              src="/lovable-uploads/0b8bc10c-c1db-4d5b-a3fd-ababd063e8b1.png" 
              alt="Logo" 
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-2xl transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="space-y-6 mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-transparent bg-clip-text tracking-tight">
            Links Úteis
          </h1>
          <p className="text-center text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Recursos selecionados para impulsionar seus projetos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
