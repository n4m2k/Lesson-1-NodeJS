import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import "./Product.css";
const Product = ({ product, onAddCart }) => {
  const handleAddCart = (product) => {
    onAddCart((prevState) => {
      const exist = prevState.some((item) => item.id === product.id);
      let newState;
      if (exist) {
        newState = prevState.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        newState = [...prevState, { ...product, quantity: 1 }];
        //Không tồn tài push vào mảng
      }

      return newState;
    });
  };

  return (
    <Fragment>
      <div className="productContainer">
        <div className="productImg">
          <img src={product.img} alt="product"></img>
        </div>
        <div className="productInfo">
          <h3 className="productName">{product.name}</h3>
          <p className="productPrice">{product.price}</p>
        </div>
        <div className="productAction">
          <Button variant="contained" color="success">
            Xem chi tiết
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleAddCart(product);
            }}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
