import { Link } from "react-router-dom";
import GoogleIcon from "../icons/GoogleIcon";
import AppleIcon from "../icons/AppleIcon";
import FormContainer from "../ContainerForms";

export default function LoginForm() {
  return (
    <FormContainer title="Seja Bem-Vindo" onSubmit={() => {}}>
      {/* Email */}
      <div>
        <label className="block text-gray-600 text-sm">E-mail</label>
        <input
          type="email"
          placeholder="Digite seu email"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 
                     focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      {/* Senha */}
      <div>
        <label className="block text-gray-600 text-sm">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="w-full mt-1 p-2 rounded-lg border border-gray-300 
                     focus:ring-2 focus:ring-[#10B981]"
          required
        />
      </div>

      <Link
        to="/"
        className="w-full flex items-center justify-center gap-2 
             bg-[#10B981] text-white py-2 rounded-lg font-semibold 
             hover:bg-green-600 transition"
      >
        Entrar
      </Link>

      <Link
        to="/user"
        className="block w-full text-center bg-[#10B981] text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Cadastrar
      </Link>

      {/* Links extras */}
      <div className="flex justify-between text-sm text-[#10B981]">
        <Link to="/company">Empresa?</Link>
        <Link to="/forgot">Esqueceu a senha?</Link>
      </div>

      {/* Divisor */}
      <div className="flex items-center gap-2 text-gray-400">
        <hr className="flex-1 border-gray-300" />
        <span className="text-sm">ou continue com</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* Botões Sociais */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
      >
        <span className="flex items-center justify-center w-5 h-5">
          <GoogleIcon className="w-5 h-5" />
        </span>
        <span className="text-sm font-medium">Google</span>
      </button>

      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-900"
      >
        <span className="flex items-center justify-center w-5 h-5">
          <AppleIcon className="w-5 h-5" />
        </span>
        <span className="text-sm font-medium">Apple</span>
      </button>
    </FormContainer>
  );
}
