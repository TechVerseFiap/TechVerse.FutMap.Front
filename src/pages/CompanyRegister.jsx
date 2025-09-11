import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { CheckCircle } from "lucide-react";
import logo from "../assets/logo.png";
import company from "../assets/company.png";

export default function Company_Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#10B981]">
      <div className="w-full max-w-md bg-gray-200 rounded-2xl shadow-xl p-6">
        {/* Header com logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="FutMap" className="w-120 h-70 rounded-full" />
        </div>

        {/* Formulário */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome da Instituição *
            </label>
            <input
              type="text"
              placeholder="Ex: Escola de Futebol Champions"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Instituição *
            </label>
            <input
              type="text"
              placeholder="Tipo"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome da Conta *
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail *
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha *
            </label>
            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar Senha *
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CNPJ *
            </label>
            <input
              type="text"
              placeholder="00.000.000/0000-00"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Endereço *
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Digite o endereço completo"
                className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-[#10B981] focus:ring-[#10B981] pr-10"
              />
              <MapPin className="absolute right-3 top-3 h-5 w-5 text-[#10B981] cursor-pointer" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Toque no ícone para selecionar no mapa
            </p>
          </div>

          {/* verification seal*/}
          <div className="flex items-start gap-3 p-4 rounded-lg border border-[#77ef8f] bg-[#BBF7D0] shadow-sm">
            {/* Icon */}
            <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0" />

            {/* Text */}
            <div>
              <h3 className="font-semibold text-green-700">
                Selo de Verificado
              </h3>
              <p className="text-sm text-gray-600">
                Após aprovação, sua instituição receberá um selo de verificado
                no mapa, aumentando a confiança dos usuários.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#10B981] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
          >
            <img src={company} alt="Empresa" className="w-4 h-4" />
            Finalizar Cadastro
          </button>

          {/* Link voltar */}
          <div className="text-center mt-2">
            <Link
              to="/"
              className="text-sm text-gray-700 hover:text-green-600 transition"
            >
              ← Voltar ao Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
