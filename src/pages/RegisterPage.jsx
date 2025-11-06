import FormInput from "../components/FormInput";
import StandardButton from "../components/StandardButton";
import { ArrowLeftIcon } from "../components/icons/Icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { playerRegisterSchema } from "../components/validations/playerRegisterSchema";
import { useNavigate } from "react-router";
import { Routes } from "../routes/routes";
import { apiPost } from "../services/apiService";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const urlApi = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(playerRegisterSchema),
    defaultValues: {
      name: "",
      position: "",
      age: "",
      image: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const newUser = {
        name: data.name,
        position: data.position,
        age: Number(data.age),
        image: data.image || "https://static.thenounproject.com/png/236432-200.png",
        email: data.email,
        senha: data.password,
      };

      await apiPost(`${urlApi}/users`, newUser);

      toast.success("Cadastro realizado com sucesso!", {
        duration: 2500,
        style: {
          background: "var(--primary-color)",
          color: "#fff",
          fontWeight: "bold",
        },
      });

      reset();

      setTimeout(() => navigate(Routes.Login, { replace: true }), 2000);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      toast.error("Erro ao cadastrar. Tente novamente mais tarde.", {
        duration: 2500,
        style: {
          background: "#dc2626",
          color: "#fff",
          fontWeight: "bold",
        },
      });
    }
  };

  function navigateLogin() {
    navigate(Routes.Login, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormInput
            label="Nome *"
            id="name"
            placeholder="Nome completo"
            value={field.value}
            onChange={field.onChange}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="position"
        control={control}
        render={({ field }) => (
          <FormInput
            label="Posição *"
            id="position"
            placeholder="Ex: Atacante"
            value={field.value}
            onChange={field.onChange}
            error={errors.position?.message}
          />
        )}
      />

      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <FormInput
            label="Idade *"
            id="age"
            type="number"
            placeholder="Ex: 18"
            value={field.value}
            onChange={field.onChange}
            error={errors.age?.message}
          />
        )}
      />

      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <FormInput
            label="Foto (URL)"
            id="image"
            placeholder="https://..."
            value={field.value}
            onChange={field.onChange}
            error={errors.image?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <FormInput
            label="E-mail *"
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={field.value}
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
            label="Senha *"
            id="password"
            type="password"
            placeholder="Mínimo 8 caracteres"
            value={field.value}
            onChange={field.onChange}
            error={errors.password?.message}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <FormInput
            label="Confirmar Senha *"
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            value={field.value}
            onChange={field.onChange}
            error={errors.confirmPassword?.message}
          />
        )}
      />

      <StandardButton type="submit" bgColor="bg-(--primary-color)">
        Finalizar Cadastro
      </StandardButton>

      <button
        type="button"
        onClick={navigateLogin}
        className="text-gray-600 text-sm flex items-center justify-center gap-1"
      >
        <ArrowLeftIcon /> Voltar ao Login
      </button>
    </form>
  );
}
