let id = 1;

const getCart = (req, res) => {
  res.status(200).json(req.session.cart);
};

const addToCart = (req, res) => {
  const inCart = req.session.cart.find(item => item.type === req.body.type);
  if (inCart) {
    inCart.quantity++;
  } else {
    const cartItem = {
      ...req.body,
      id,
      quantity: 1
    };
    req.session.cart.push(cartItem);
    id++;
  }
  res.status(200).json(req.session.cart);
};

const deleteFromCart = (req, res) => {
  const filtered = req.session.cart.filter(
    item => item.id !== parseInt(req.params.id)
  );
  req.session.cart = filtered;
  res.status(200).json(req.session.cart);
};

const changeQuantity = (req, res) => {};

module.exports = {
  getCart,
  addToCart,
  deleteFromCart,
  changeQuantity
};
