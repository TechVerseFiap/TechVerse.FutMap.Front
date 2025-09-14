import { Link } from "react-router";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#10B981]">
      <div className="w-full max-w-md bg-gray-200 rounded-2xl shadow-xl p-6">
        {/* Logo FutMap */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="FutMap" className="w-120 h-70 rounded-full" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
          Seja Bem-Vindo
        </h2>

        {/* Formulário */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm">E-mail:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 rounded-lg  bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm">Senha:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            className="w-full bg-[#10B981] text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Entrar
          </button>

          {/* Botão Cadastrar */}
          <Link
            to="/PlayerRegister"
            className="block text-center w-full bg-[#10B981] text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Cadastrar
          </Link>

          {/* Links adicionais */}
          <div className="flex justify-between text-sm mt-2">
            <Link to="/company" className="text-green-600 hover:underline">
              Empresa?
            </Link>
            <Link
              to="/forgot-password"
              className="text-green-600 hover:underline"
            >
              Esqueceu a senha?
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">ou continue com</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Botões sociais */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
            <img src={google} alt="Google Logo" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-black text-white rounded-lg py-2 hover:bg-gray-900 transition">
            <img src={apple} alt="Apple Logo" className="w-5 h-5" />
            <span>Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}
