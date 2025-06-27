# 📚 LivroSaaS – Demo

**LivroSaaS** é uma aplicação *demo* de um SaaS (Software as a Service) para aluguel mensal de livros didáticos. Criado com foco em aprendizado e demonstração técnica, este projeto explora uma stack moderna de desenvolvimento fullstack.

![LivroSaSS](https://github.com/user-attachments/assets/e39a6648-7f1a-46dd-88c4-bb568d0af15b)


---

## 🚀 Tecnologias Utilizadas

- **Next.js** – Framework React full-stack com suporte ao App Router.
- **Tailwind CSS** – Estilização com utilitários para uma UI moderna e responsiva.
- **Framer Motion** – Animações fluidas e interativas.
- **Auth.js** – Sistema de autenticação robusto e extensível.
- **Prisma ORM** – Gerenciamento e modelagem de banco de dados.
- **Turso** – Banco de dados edge baseado em SQLite.
- **bcrypt** – Criptografia de senhas.
- **Docker** - criação de container (docker-compose.yml) mySql no inicio do desenvolvimento do projeto.
- **Stripe** - Pagamentos/Assinaturas.

---

## 🧠 Sobre o Projeto

O objetivo desta demo é apresentar a estrutura e funcionalidades iniciais de um SaaS educacional. Usuários podem se cadastrar, fazer login e visualizar uma base fictícia de aluguel de livros.

---

## ✨ Funcionalidades

- Cadastro e login com autenticação segura
- Hash de senhas com bcrypt
- Interface moderna e adaptável com Tailwind CSS
- Animações com Framer Motion
- Integração com banco de dados utilizando Prisma + Turso
- Estrutura de projeto escalável

# 🧪 Como Rodar Localmente

Siga os passos abaixo para rodar a aplicação BookRent localmente em sua máquina:

```bash
git clone https://github.com/Mauricio-Chiapetta/livro-saas.git
cd livro-saas
npm i
npx prisma generate
npx prisma db push
npm run dev
```
Este projeto foi desenvolvido apenas para fins de aprendizado e demonstração. Sinta-se livre para utilizar como referência.


👨‍💻 Autor
Mauricio Chiapetta

