import FormInput from "../components/FormInput";
import StandardButton from "../components/StandardButton";
import { ArrowLeftIcon, CompanyIcon, VerifiedIcon } from "../components/icons/Icons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyRegisterSchema } from "../components/validations/companyRegisterSchema";
import { useNavigate } from "react-router";
import { Routes } from "../routes/routes";

export default function RegisterCompanyPage() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(companyRegisterSchema),
        defaultValues: {
            name: "",
            institutionType: "",
            accountName: "",
            email: "",
            password: "",
            confirmPassword: "",
            cnpj: "",
            address: "",
        }
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Form enviado ✅", data);
        navigateLogin()
    };

    function navigateLogin() {
        navigate(Routes.Login, { replace: true })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Nome da instituição *"
                        id="name"
                        placeholder="Ex: Escolinha Champions League"
                        value={field.value || ""}
                        onChange={field.onChange}
                        error={errors.name?.message}
                    />
                )}
            />

            <Controller
                name="institutionType"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Tipo de Instituição *"
                        id="institutionType"
                        placeholder="Ex: Escola, Universidade"
                        value={field.value || ""}
                        onChange={field.onChange}
                        error={errors.institutionType?.message}
                    />
                )}
            />

            <Controller
                name="accountName"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="Nome da Conta *"
                        id="accountName"
                        type="text"
                        placeholder="Seu nome completo"
                        value={field.value || ""}
                        onChange={field.onChange}
                        error={errors.accountName?.message}
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
                name="cnpj"
                control={control}
                render={({ field }) => (
                    <FormInput
                        label="CNPJ"
                        id="cnpj"
                        placeholder="00.000.000/0000-00"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.cnpj?.message}
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

            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200 w-full">
                <div className="text-green-600">
                    <VerifiedIcon fill="#22C55E" className="w-6 h-6" />
                </div>

                <div className="text-sm text-green-800">
                    <p className="font-semibold">Selo de Verificado</p>
                    <p className="mt-1">
                        Após aprovação, sua instituição receberá um selo de verificado no mapa,
                        aumentando a confiança dos usuários.
                    </p>
                </div>
            </div>

            <StandardButton bgColor="bg-(--primary-color)" icon={<CompanyIcon fill="#FFFFFF" />}>
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
