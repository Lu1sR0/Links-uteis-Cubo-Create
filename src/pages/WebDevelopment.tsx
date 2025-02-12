
import { useState } from "react";
import { Code, Globe, Database, Terminal } from "lucide-react";
import SearchBar from "../components/SearchBar";
import ResourceCard from "../components/ResourceCard";

const webResources = [
  {
    title: "MDN Web Docs",
    description: "Documentação completa para tecnologias web",
    url: "https://developer.mozilla.org",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "GitHub",
    description: "Plataforma de hospedagem de código e colaboração",
    url: "https://github.com",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Stack Overflow",
    description: "Comunidade de perguntas e respostas para programadores",
    url: "https://stackoverflow.com",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    title: "Firebase",
    description: "Plataforma de desenvolvimento de aplicativos",
    url: "https://firebase.google.com",
    icon: <Database className="w-6 h-6" />,
  },
];

const WebDevelopment = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = webResources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Desenvolvimento Web</h1>
        <p className="text-center text-muted-foreground mb-8">
          Recursos essenciais para desenvolvimento web
        </p>
        <SearchBar onSearch={setSearchQuery} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
