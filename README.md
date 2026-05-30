App Pedidos Hamburgueria

Interface para gerenciamento de pedidos de uma hamburgueria, construída com React. 
É possível realizar novos pedidos, listar todos os pedidos e removê-los através de uma API REST.

Funcionalidades

- Realizar pedido com nome do cliente
- Listar todos os pedidos cadastrados
- Deletar pedidos da lista
- Navegação entre páginas com React Router

Tecnologias

- React
- Styled Components
- Axios
- React Router DOM

Como rodar

Clone o repositório e instale as dependências:

```bash
npm install
```

Certifique-se de que a API está rodando em `http://localhost:3001` antes de iniciar a aplicação.

```bash
npm start
```

Estrutura do projeto
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

#Endpoints utilizados

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | /order | Cria um novo pedido |
| GET | /order | Lista todos os pedidos |
| DELETE | /order/:id | Remove um pedido |

Commits (em ordem natural de desenvolvimento)

commit inicial - configuração do projeto com create react app

adiciona estilos globais com styled-components

configura rotas com react-router-dom

cria componente de fundo reutilizável

cria componente de título

cria página Home com formulário de pedido

conecta formulário ao endpoint POST /order

estiliza página Home com inputs e botão

adiciona imagem do hamburguer na tela de pedidos

cria página de listagem de pedidos

conecta página de pedidos ao endpoint GET /order

adiciona funcionalidade de deletar pedido

adiciona botão de voltar para a tela inicial

estiliza lista de pedidos e itens

adiciona ícone de lixeira nos pedidos

adiciona imagem do hamburguer na tela de listagem
