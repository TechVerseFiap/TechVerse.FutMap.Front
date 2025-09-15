import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import FormContainer from "../ContainerForms";
import PointMapIcon from "../icons/PointMapIcon";
import CompanyIcon from "../icons/CompanyIcon";
import InfoIcon from "../icons/InfoIcon";

export default function CompanyRegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro de empresa enviado!");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {/* Nome da empresa */}
      <div>
        <label className="block text-gray-600 text-sm">
          Nome da Instituição
        </label>
        <input
          type="text"
          placeholder="Ex: Escola de Futebol Champions"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Nome do responsável */}
      <div>
        <label className="block text-gray-600 text-sm">
          Tipo de Instituição
        </label>
        <input
          type="text"
          placeholder="Tipo"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      <div>
        <label className="block text-gray-600 text-sm">Nome da Conta</label>
        <input
          type="text"
          placeholder="Seu nome completo"
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

      {/* CNPJ */}
      <div>
        <label className="block text-gray-600 text-sm">CNPJ</label>
        <input
          type="text"
          placeholder="00.000.000/0000-00"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Endereço */}
      <div>
        <label className="block text-gray-600 text-sm">Endereço</label>

        <div className="relative">
          <input
            type="text"
            placeholder="Digite o endereço completo"
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981] pr-10"
            required
          />
          {/* Ícone dentro do input */}
          <span className="absolute inset-y-0 right-3 flex items-center text-[#10B981] cursor-pointer">
            <PointMapIcon className="w-5 h-5" />
          </span>
        </div>

        <div className="flex items-center gap-1 mt-1 text-gray-500">
          <InfoIcon className="w-4 h-4" />
          <p className="text-xs">Toque no ícone para selecionar no mapa</p>
        </div>
      </div>

      {/* Aviso de Selo de Verificado */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
        <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0" />
        <div>
          <p className="font-semibold text-[#10B981]">Selo de Verificado</p>
          <p className="text-sm text-gray-600">
            Após aprovação, sua instituição receberá um selo de verificado no
            mapa, aumentando a confiança dos usuários.
          </p>
        </div>
      </div>

      {/* Botão principal */}
      <Link
        to="/"
        className="w-full bg-[#10B981] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
      >
        <CompanyIcon className="w-5 h-5" />
        <span>Finalizar Cadastro</span>
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
