
import { useEffect } from "react";

const Budget = () => {
  useEffect(() => {
    const message = encodeURIComponent("quero fazer um orçamento com vocês");
    window.location.href = `https://wa.me/5516991509041?text=${message}`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <p className="text-lg text-primary">Redirecionando para o WhatsApp...</p>
      </div>
    </div>
  );
};

export default Budget;
