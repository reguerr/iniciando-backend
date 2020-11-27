import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

// Rota: Receber a requisicao, chamar outro arquivo e devolver uma resposta

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const result: any = { ...user };
    delete result.password;

    return response.json(result);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
