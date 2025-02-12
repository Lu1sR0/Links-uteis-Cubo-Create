
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  external?: boolean;
}

const CategoryCard = ({ title, description, icon: Icon, path, external }: CategoryCardProps) => {
  const CardContent = () => (
    <div className="glass-card hover-scale rounded-2xl p-8 h-full group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-600/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 blur opacity-25 group-hover:opacity-75 transition duration-1000 rounded-2xl"></div>
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-primary via-blue-600 to-primary rounded-xl p-4 w-fit mb-6 shadow-lg group-hover:shadow-primary/25 transition-all duration-500">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={path} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </a>
    );
  }

  return (
    <Link to={path} className="block">
      <CardContent />
    </Link>
  );
};

export default CategoryCard;
