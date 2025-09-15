import * as z from "zod";

export const playerRegisterSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  responsavel: z.string().nonempty("O nome do responsável é obrigatório"),
  email: z.email("E-mail inválido"),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número"),
  confirmPassword: z.string().nonempty("Confirme a senha"),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
    .optional()
    .or(z.literal("")),
  address: z.string().nonempty("O endereço é obrigatório"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"], 
});
