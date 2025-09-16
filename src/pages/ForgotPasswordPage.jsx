import FormInput from "../components/FormInput";
import StandardButton from "../components/StandardButton";
import { ArrowLeftIcon } from "../components/icons/Icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../components/validations/forgotPasswordSchema";
import { useNavigate } from "react-router";
import { Routes } from "../routes/routes";

export default function ForgotPasswordPage() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Senha redefinida", data);
        navigateLogin()
    };

    function navigateLogin() {
        navigate(Routes.Login, { replace: true })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="space-y-4">
                <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
                    Redefina sua senha
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
                            label="Confirmar Senha"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirme sua senha"
                            value={field.value || ""}
                            onChange={field.onChange}
                            error={errors.confirmPassword?.message}
                        />
                    )}
                    />

                </div>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-black" />
                    <span className="px-2 text-gray-500 text-sm">Anote sua Senha!</span>
                    <hr className="flex-grow border-black" />
                </div>

                <StandardButton bgColor="bg-(--primary-color)">
                    Redefinir Senha
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