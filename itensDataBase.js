// // Criar um banco de itens {nome, quantidade, valor, id}
// uma função pra criar um item novo
// Uma função pra editar um item criado
// uma função pra deletar
// uma função pra listar todos
// uma função pra listar um só com base no id

const itensDataBase = [
  {
    name: "Keyboard",
    quantity: 2,
    price: 50.0,
    id: 1,
  },
  {
    name: "Mouse",
    quantity: 1,
    price: 20.0,
    id: 2,
  },
  {
    name: "iPad",
    quantity: 3,
    price: 1000.0,
    id: 3,
  },
];

const createObject = (name, quantity, price) => {
  itensDataBase.push({
    name: name,
    quantity: quantity,
    price: price,
    id: itensDataBase.length + 1,
  });
};
createObject("key", 2, 10.5);

const editObject = (name, quantity, price, id) => {
  const newObject = { name: name, quantity: quantity, price: price, id: id };

  for (let i = 0; i < itensDataBase.length; i++) {
    if (itensDataBase[i].id === id) {
      itensDataBase[i] = newObject;
    }
  }
};

const deleteObject = (id) => {
  for (let i = 0; i < itensDataBase.length; i++) {
    if (itensDataBase[i].id === id) {
      for (let j = i; j > dataBase.length - 1; j++) {
        dataBase[j] = dataBase[j + 1];
      }
      dataBase.length = dataBase.length - 1;
    }
  }
};

const showObjectById = (id) => {
  for (let i = 0; i < itensDataBase.length; i++) {
    if (itensDataBase[i].id === id) {
      return itensDataBase[i];
    }
  }
};

const showAllObjects = () => {
  return itensDataBase;
};

const itens = {
  create: createObject,
  edit: editObject,
  delete: deleteObject,
  list: showAllObjects,
  get: showObjectById,
};
itens.create("Samsung Galaxy Ultra 24", 1, 1000.0);
console.log(itens.list());
