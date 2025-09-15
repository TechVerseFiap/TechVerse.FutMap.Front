import { Link } from "react-router-dom";
import FormContainer from "../ContainerForms";
import PointMapIcon from "../icons/PointMapIcon";
import InfoIcon from "../icons/InfoIcon";

export default function UserRegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro de empresa enviado!");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {/* Nome Completo */}
      <div>
        <label className="block text-gray-600 text-sm">Nome</label>
        <input
          type="text"
          placeholder="Nome Completo"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Nome do responsável */}
      <div>
        <label className="block text-gray-600 text-sm">
          Nome do Responsável
        </label>
        <input
          type="text"
          placeholder="Nome do responsável"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-600 text-sm">E-mail</label>
        <input
          type="email"
          placeholder="seu@email.com"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Senha */}
      <div>
        <label className="block text-gray-600 text-sm">Senha</label>
        <input
          type="password"
          placeholder="Mínimo 8 caracteres"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Confirmar Senha */}
      <div>
        <label className="block text-gray-600 text-sm">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* CPF */}
      <div>
        <label className="block text-gray-600 text-sm">CPF</label>
        <input
          type="text"
          placeholder="000.000.000-00"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Endereço */}
      <div>
        <label className="block text-gray-600 text-sm">Endereço</label>
        <div className="relative mt-1">
          <input
            type="text"
            placeholder="Digite o endereço completo"
            className="w-full p-2 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
            required
          />
          {/* Ícone dentro do input */}
          <span className="absolute inset-y-0 right-3 flex items-center text-[#10B981] cursor-pointer">
            <PointMapIcon className="w-5 h-5" />
          </span>
        </div>

        {/* Info abaixo */}
        <div className="flex items-center gap-1 mt-1 text-gray-500">
          <InfoIcon className="w-4 h-4" />
          <p className="text-xs">Toque no ícone para selecionar no mapa</p>
        </div>
      </div>

      {/* Botão principal (mais alto) */}
      <Link
        to="/"
        className="w-full flex items-center justify-center gap-2 
             bg-[#10B981] text-white py-2 rounded-lg font-semibold 
             hover:bg-green-600 transition"
      >
        Finalizar Cadastro
      </Link>

      {/* Voltar para login */}
      <Link
        to="/login"
        className="block text-center mt-2 text-sm text-[#10B981] hover:underline"
      >
        ← Voltar ao Login
      </Link>
    </FormContainer>
  );
}
