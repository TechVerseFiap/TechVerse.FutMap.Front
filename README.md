# 📌 FutMap

FutMap é uma aplicação voltada para conectar jogadoras, torneios, escolas e eventos esportivos em uma interface intuitiva e interativa.  
A plataforma oferece autenticação, cadastro de usuários, exibição de mapas com pins interativos, filtros dinâmicos e um drawer inferior com informações detalhadas.

---

## 🚀 Funcionalidades

- **Autenticação e Registro**
  - Login com validação (React Hook Form + Zod).
  - Cadastro de jogadoras e empresas.
  - Armazenamento de sessão via Context API + LocalStorage.

- **Perfil do Usuário**
  - Exibição de informações (nome, posição, idade, foto).
  - Acesso a eventos, favoritos e locais salvos.
  - Gerenciamento de preferências e segurança.

- **Mapa Interativo**
  - Google Maps embutido via `iframe`.
  - Pins interativos (🏫 Escolas, 🏆 Torneios, ⏰ Eventos).
  - Cada pin abre um **Bottom Drawer** com detalhes sobre o local.

- **Filtros Dinâmicos**
  - Componente de chips para filtrar por categoria (escolas, torneios, eventos).
  - Scroll responsivo com auto-ajuste.

- **Bottom Drawer Inteligente**
  - Arraste para expandir/recolher.
  - Exibição de notas, avaliações, telefone, faixa etária e status de funcionamento.
  - Botões de ação rápida (avaliar, ligar, compartilhar, salvar).

---

## 🏗️ Arquitetura

- **Front-end:** React + Vite
- **Gerenciamento de estado:** Context API + React Query
- **Formulários e validação:** React Hook Form + Zod
- **UI & Estilo:** TailwindCSS + componentes customizados
- **Autenticação:** LocalStorage + Context Provider
- **Integrações:**
  - Google Maps (embed)
  - MockAPI para persistência de dados de usuários

---

## 🛠️ Tecnologias Utilizadas

- React 18
- Vite
- React Router v6
- React Hook Form
- Zod
- TanStack React Query
- TailwindCSS
- Shadcn UI Components
- MockAPI (para endpoints de usuários)

---

## 🌐 API

**Base URL:**  
```
https://68c7351e442c663bd028fb2c.mockapi.io/futmap/api
```

### 🔹 Endpoints principais

- `GET /users` → retorna todos os usuários cadastrados.  
Exemplo de objeto:
```json
{
  "id": "1",
  "name": "Marta Rodrigues",
  "image": "https://link-da-imagem",
  "position": "Atacante",
  "age": 39,
  "email": "marta@gmail.com",
  "senha": "Senha121"
}
```

---

## 📂 Estrutura de Pastas (simplificada)

```
src/
 ├── components/       # Componentes reutilizáveis (Pin, BottomDrawer, etc.)
 ├── pages/            # Páginas principais (Login, Profile, Home, etc.)
 ├── routes/           # Definição de rotas + ProtectedRoute
 ├── hooks/            # useAuth e custom hooks
 ├── assets/           # Logos e imagens estáticas
 └── App.jsx           # Ponto de entrada
```

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/futmap.git
   cd futmap
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` (se necessário) para variáveis de ambiente.

4. Rode a aplicação:
   ```bash
   npm run dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## 📌 Futuras Melhorias

- Autenticação com JWT real.
- Integração com Firebase ou Supabase para persistência de dados.
- Sistema de notificações push.
- Modo offline para visualização de mapas.
- CRUD de eventos e torneios direto no app.

---

## 👨‍💻 Equipe

Projeto desenvolvido por:  
- Lucas dos Reis Aquino - 562414  
- Lucas Perez Bonato - 565356  
- Diogo Oliveira Lima - 562559  
- Leandro Simoneli da Silva - 566539  
