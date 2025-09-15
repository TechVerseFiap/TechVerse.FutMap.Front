import * as zod from "zod";

export const companyRegisterSchema = zod.object({
  name: zod
    .string()
    .nonempty("O nome é obrigatório"),
  institutionType: zod
    .string()
    .nonempty("O tipo de instituição é obrigatório"),
  accountName: zod
    .string()
    .nonempty("O nome da conta é obrigatório"),
  email: zod
    .email("E-mail inválido"),
  password: zod
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número"),
  confirmPassword: zod
    .string()
    .nonempty("Confirme a senha"),
  cnpj: zod
    .string()
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "CNPJ inválido")
    .optional()
    .or(zod.literal("")),
  address: zod
    .string()
    .nonempty("O endereço é obrigatório"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"], 
});
