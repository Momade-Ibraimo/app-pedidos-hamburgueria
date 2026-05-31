# 🍔 App Pedidos Hamburgueria

Interface para gerenciamento de pedidos de uma hamburgueria, construída com React. Permite realizar novos pedidos, listar todos os pedidos e removê-los através de uma API REST.

> ⚠️ **Este projeto faz parte de um sistema com dois repositórios que se comunicam. Para funcionar corretamente, a API e o Frontend precisam estar rodando na mesma máquina ao mesmo tempo.**
>
> | Repositório | Link |
> |---|---|
> | 🔧 **API (necessária para o frontend funcionar)** | [order-management-api](https://github.com/Momade-Ibraimo/order-management-api) |
> | 🖥️ **Frontend (você está aqui)** | [app-pedidos-hamburgueria](https://github.com/Momade-Ibraimo/app-pedidos-hamburgueria) |

---

## 🌐 Deploy

Acesse a versão publicada: [app-pedidos-hamburgueria](https://momade-ibraimo.github.io/app-pedidos-hamburgueria/)

> ⚠️ A versão publicada no GitHub Pages exibe a interface, mas **as funcionalidades dependem da API rodando localmente**. Para uso completo, siga as instruções abaixo.

---

## ✅ Funcionalidades

- Realizar pedido com nome do cliente
- Listar todos os pedidos cadastrados
- Deletar pedidos da lista
- Navegação entre páginas com React Router

---

## 🛠️ Tecnologias utilizadas

- React
- Styled Components
- Axios
- React Router DOM
- Node.js
- Express

---

## ⚙️ Como rodar

### 1. Suba a API primeiro

O frontend **depende da API** para funcionar. Antes de tudo, clone e inicie o back-end:

```bash
git clone https://github.com/Momade-Ibraimo/order-management-api
cd order-management-api
npm install
npm start
```

A API deve estar rodando em `http://localhost:3001`.

### 2. Suba o frontend

```bash
git clone https://github.com/Momade-Ibraimo/app-pedidos-hamburgueria
cd app-pedidos-hamburgueria
npm install
npm start
```

Com os dois rodando na mesma máquina, a aplicação estará completamente funcional.

---

## 📁 Estrutura do projeto

```
src/
├── assets/
├── Components/
│   ├── Background/
│   └── Title/
├── containers/
│   ├── Home/
│   └── Orders/
├── GLstyles/
│   └── globalstyles.js
├── routes.js
└── index.js
```

---

## 🔗 Endpoints utilizados

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/order` | Cria um novo pedido |
| `GET` | `/order` | Lista todos os pedidos |
| `DELETE` | `/order/:id` | Remove um pedido |

---

## 📝 Histórico de commits

1. Configuração inicial do projeto com Create React App
2. Estilos globais com Styled Components
3. Configuração de rotas com React Router DOM
4. Componente de fundo reutilizável
5. Componente de título
6. Página Home com formulário de pedido
7. Conexão do formulário ao endpoint `POST /order`
8. Estilização da página Home
9. Imagem do hambúrguer na tela de pedidos
10. Página de listagem de pedidos
11. Conexão da listagem ao endpoint `GET /order`
12. Funcionalidade de deletar pedido
13. Botão de voltar para a tela inicial
14. Estilização da lista de pedidos
15. Ícone de lixeira nos pedidos
16. Imagem do hambúrguer na tela de listagem
