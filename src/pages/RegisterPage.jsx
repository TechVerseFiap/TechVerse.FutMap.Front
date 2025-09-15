import FormInput from "../components/FormInput";
import StandardButton from "../components/StandardButton";
import { ArrowLeftIcon } from "../components/icons/Icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { playerRegisterSchema } from "../components/validations/playerRegisterSchema";
import { useNavigate } from "react-router";
import { Routes } from "../routes/routes"

export default function RegisterPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(playerRegisterSchema),
      defaultValues: {
      name: "",
      responsavel: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
      address: "",
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form enviado ✅", data);
    navigateLogin()
  };

  function navigateLogin(){
    navigate(Routes.Login, {replace: true} )
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
            value={field.value || ""}
            onChange={field.onChange}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="responsavel"
        control={control}
        render={({ field }) => (
          <FormInput
            label="Nome do Responsável *"
            id="responsavel"
            placeholder="Nome do responsável"
            value={field.value || ""}
            onChange={field.onChange}
            error={errors.responsavel?.message}
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
            label="Senha *"
            id="password"
            type="password"
            placeholder="Mínimo 8 caracteres"
            value={field.value || ""}
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
            value={field.value || ""}
            onChange={field.onChange}
            error={errors.confirmPassword?.message}
          />
        )}
      />

      <Controller
        name="cpf"
        control={control}
        render={({ field }) => (
          <FormInput
            label="CPF"
            id="cpf"
            placeholder="000.000.000-00"
            value={field.value}
            onChange={field.onChange}
            error={errors.cpf?.message}
          />
        )}
      />

      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <FormInput
            label="Endereço *"
            id="address"
            placeholder="Digite o endereço completo"
            value={field.value || ""}
            onChange={field.onChange}
            error={errors.address?.message}
          />
        )}
      />

      <StandardButton bgColor="bg-(--primary-color)">
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
