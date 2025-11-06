import { Routes } from "../routes/routes";
import { Link, useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../components/validations/loginSchema";
import FormInput from "../components/FormInput";
import Button from "../components/StandardButton";
import { loginUser, getAuthenticated } from "../hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAuthenticated()) navigateHome();
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await loginUser(data);

    if (res.success) {
      toast.success(`Bem-vinda, ${res.user.name}!`);
      navigateHome();
    } else {
      toast.error(res.message || "E-mail ou senha incorretos!");
    }
  };

  function navigateHome() {
    navigate(Routes.Root, { replace: true });
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

        <Button type="submit" bgColor="bg-(--primary-color)" style="w-full">
          Entrar
        </Button>

        <Button
          type="button"
          bgColor="bg-(--primary-color)"
          style="w-full"
          onClick={() => navigate(Routes.Register)}
        >
          Cadastrar
        </Button>
      </div>
    </form>
  );
}
