import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Register() {
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
              Nome:
            </label>
            <input
              type="text"
              placeholder="Nome Completo"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-bg-[#10B981] focus:ring-bg-[#10B981]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome do Responsável *
            </label>
            <input
              type="text"
              placeholder="Nome do responsável"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail *
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha *
            </label>
            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar Senha *
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              type="text"
              placeholder="000.000.000-00"
              className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-green-500 focus:ring-green-500"
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
                className="mt-1 w-full rounded-lg bg-gray-100 border-gray-300 bg-gray-100 p-3 text-sm shadow-sm focus:border-green-500 focus:ring-green-500 pr-10"
              />
              <MapPin className="absolute right-3 top-3 h-5 w-5 text-green-500 cursor-pointer" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Toque no ícone para selecionar no mapa
            </p>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#10B981] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
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
