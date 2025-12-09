import crypto from 'crypto';

const users = [];

export const createUser = (name, email, password) => {

  const userExists = users.find(user => user.email === email); //vê se o email já existe
  if (userExists) {
    throw new Error('Usuário já existe');
  } 

  const id = crypto.randomUUID();
  const encryptedPassword = crypto.createHash('sha256').update(password).digest('hex');

  const newUser = {
    id,
    name,
    email,
    password: encryptedPassword
  };

  users.push(newUser);

  return {
    name: newUser.name,
    email: newUser.email,
    id: newUser.id
  };
};

export const getAllUsers = () => {

  const safeUsers = users.map(user => ({
    name: user.name,
    email: user.email,
    id: user.id
  }));

  return { users,total: users.length };
};
