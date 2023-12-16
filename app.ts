import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import axios from "axios";

const app = express();

const porta: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota simples para raiz
app.get('/', (req: Request, res: Response) => {
    res.send('Bem vindo ao meu servidor!');
  });

// inicializa o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    console.log(`Rota para listar todos os usuários: http://localhost:${porta}/users`);
    console.log(`Rota para obter detalhes de um usuário pelo ID: http://localhost:${porta}/users/{userId}`);
    console.log(`Rota para adicionar um novo usuário: http://localhost:${porta}/users (método POST)`);
    console.log(`Rota para saudação personalizada ao usuário: http://localhost:${porta}/users/greet/{firstName}`);
    console.log(`Rota para editar um usuário pelo ID: http://localhost:${porta}/users/{userId} (método PUT)`);
    console.log(`Rota para deletar um usuário pelo id: http://localhost:${porta}/users/{userId} (método DELETE)`);
  });

  // Lista de usuários
const users = [
    { userId: 1, firstName: "Adriano", lastName: "Baza" },
    { userId: 2, firstName: "Ana", lastName: "Catarina" },
    { userId: 3, firstName: "Vitor", lastName: "Ferreira  " },
];

// Rota para listar todos os usuários
app.get('/users', (req: Request, res: Response) => {
// Lógica para obter e retornar todos os usuários
    res.status(200).json({ users });
});

// Rota para obter detalhes de um usuário pelo ID
app.get("/users/:userId", (req: Request, res: Response) => {
    const user = users.find((l) => l.userId === parseInt(req.params.userId));  
    if (!user) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    res.status(200).json({usuario: `${user.userId} - ${user.firstName} ${user.lastName} - consulta concluída com sucesso`});
});