import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod
    .email("E-mail inválido"),
  password: zod
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});
