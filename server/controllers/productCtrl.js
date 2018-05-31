const getAllProducts = (req, res) => {
  req.app
    .get('db')
    .products.getAllProducts()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getAllProducts
};
