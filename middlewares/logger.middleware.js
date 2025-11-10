export const requestLogger = (req, res, next) => {
  console.log(`[LOGGER] Requisição recebida: ${req.method} no caminho ${req.path}`);

  next();
};
