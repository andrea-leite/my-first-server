
import { createUser, getAllUsers } from '../services/user.service.js';

export const createUserController = (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
        return res.status(400).json({ 
      error: "O campo nome é obrigatório. Por favor, digite seu nome." 
    });
}
 if (!email) 
  return res.status(400).json({ 
    error: "O campo email é obrigatório. Por favor, digite seu email."
  });
  if (!email.includes('@')) {
    return res.status(400).json({
    error: "O email digitado parece inválido. Verifique se possui o caractere '@'."
  });
 }

 if (!password){
  return res.status(400).json({ 
    error: "O campo senha é obrigatório. Por favor, digite sua senha."
  });
  }    

  const user = createUser(name, email, password);
  if(!user){
    return res.status(409).json({
      error: "Este e-mail já está cadastrado em nossa base de dados."
    });
  }
  
  res.status(201).json(user);
};

export const getAllUsersController = (req, res) => {
  const data = getAllUsers();
  res.status(200).json(data);
};

