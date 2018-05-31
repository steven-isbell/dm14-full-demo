import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../ducks/productReducer';
import { getCart, addToCart } from '../../ducks/cartReducer';

class Shop extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
  }
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          justifyContent: 'center'
        }}
      >
        {this.props.products[0] ? (
          this.props.products.map((product, i) => (
            <div
              key={i}
              style={{
                height: '300px',
                width: '500px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid black',
                margin: '10px'
              }}
            >
              <h1>{product.type}</h1>
              <br />
              <p>{product.price}</p>
              <br />
              <button
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <div>No Product</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ products, cart }) => ({ ...products, ...cart });

export default connect(mapStateToProps, { getProducts, getCart, addToCart })(
  Shop
);
