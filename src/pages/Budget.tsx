
import { useEffect } from "react";

const Budget = () => {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/gestor.bielrds?igsh=MnBjdzVpd2M3ejlp";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <p className="text-lg text-primary">Redirecionando para o Instagram...</p>
      </div>
    </div>
  );
};

export default Budget;
