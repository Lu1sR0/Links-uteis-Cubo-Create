
import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

const ResourceCard = ({ title, description, url, icon }: ResourceCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="glass-card hover-scale rounded-xl p-6 h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="text-primary">{icon}</div>
          <ExternalLink className="w-5 h-5 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
};

export default ResourceCard;
