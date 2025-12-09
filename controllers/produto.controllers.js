import { createProduct, getAllProducts } from "../services/product.services.js";

export const checkProdutoController = (req, res) => {
 
    const data = getAllProducts();

    res.status(200).json(data);
 
};

export const createProductController = (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.status(400).json({message:"Dados inválidos"})
  }

  const product = createProduct(req.body.name, req.body.price);

  res.status(201).json(product);
};

export const getProductController = (req, res) => {
  res.json(product);
};


//acrescentar acessibilidade
