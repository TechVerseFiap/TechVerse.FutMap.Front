import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import FormInput from "../components/FormInput";
import StandardButton from "../components/StandandButton";
import { Routes } from "../routes/routes";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-500">
      <div className="w-full max-w-md bg-gray-100 rounded-2xl shadow-xl p-6">
        {/* Logo FutMap */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="FutMap" className="w-120 h-70 rounded-full" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
          Seja Bem-Vindo
        </h2>

        {/* Formulário */}
        <form className="space-y-4"> 
          <FormInput label="E-mail" type="text" placeholder="Insira seu E-mail" />
          <FormInput label="Senha" type="password" placeholder="Insira sua Senha" />
          
          <StandardButton text="Entrar"  />    
          <StandardButton text="Cadastrar" route={Routes.Register} />    

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
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
            Google
          </button>
          <button className="w-full flex items-center justify-center bg-black text-white rounded-lg py-2 hover:bg-gray-900 transition">
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}
