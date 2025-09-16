import { Routes } from "../routes/routes";
import { Link, Route, useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { loginSchema } from "../components/validations/loginSchema";
import FormInput from "../components/FormInput";
import Button from "../components/StandardButton"

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = (data) => {
    console.log("Form enviado ✅", data);
    navigateHome()
  };

  function navigateHome() {
    navigate(Routes.Root, { replace: true })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="space-y-4">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
          Seja Bem-Vindo
        </h2>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormInput
              label="E-mail"
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={field.value || ""}
              onChange={field.onChange}
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FormInput
              label="Senha"
              id="password"
              type="password"
              placeholder="********"
              value={field.value || ""}
              onChange={field.onChange}
              error={errors.password?.message}
            />
          )}
        />

        <Button
          type="submit"
          bgColor="bg-(--primary-color)"
          style="w-full"
        >
          Entrar
        </Button>

        <Button
          bgColor="bg-(--primary-color)"
          style="w-full"
          onClick={() => navigate(Routes.PlayerRegister)}
        >
          Cadastrar
        </Button>

        <div className="flex justify-between text-sm mt-2">
          <Link to={Routes.RegisterCompany} className="text-green-600 hover:underline">
            Empresa?
          </Link>
          <Link
            to={Routes.ForgotPassword}
            className="text-green-600 hover:underline"
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>

      <div className="flex items-center my-6">
        <hr className="flex-grow border-black" />
        <span className="px-2 text-gray-500 text-sm">ou continue com</span>
        <hr className="flex-grow border-black" />
      </div>

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
    </form>
  );
}
