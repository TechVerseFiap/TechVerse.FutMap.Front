import * as zod from "zod";

const validPositions = [
  "Atacante",
  "Meio Campo",
  "Zagueira",
  "Goleira",
  "Lateral",
];

export const playerRegisterSchema = zod
  .object({
    name: zod.string().nonempty("O nome é obrigatório"),
    position: zod
      .string()
      .nonempty("A posição é obrigatória")
      .refine((val) => validPositions.includes(val), {
        message: "Posições válidas: Atacante |  Meio Campo | Zagueira | Goleira | Lateral",
      }),
    age: zod
      .string()
      .nonempty("A idade é obrigatória")
      .regex(/^\d+$/, "A idade deve ser um número"),
    email: zod.string().email("E-mail inválido"),
    password: zod
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[0-9]/, "A senha deve conter pelo menos um número"),
    confirmPassword: zod.string().nonempty("Confirme a senha"),
    image: zod
      .string()
      .url("A imagem deve ser uma URL válida")
      .optional()
      .or(zod.literal("")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
