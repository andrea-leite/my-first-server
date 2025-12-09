import crypto from "crypto"

const products = [];

export const createProduct = (name, price) => {
  const newProduct = {
    id: crypto.randomUUID(),
    name: name,
    price: price,
    //description: description || "Imagem do produto " + name //acessibility
  };

  products.push(newProduct);
  return newProduct;
  };

  export const getAllProducts = () => {
    return {
       products: products,
       total: products.length
    };
  };
