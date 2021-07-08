import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  let history = useHistory()

  const addToCartHandler = () => {
    history.push(`/cart/${product._id}?qty=${1}`)
  }

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} varient="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>

        <Button
          onClick={addToCartHandler}
          className="btn-block rounded"
          type="button"
          disabled={product.countInStock === 0}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Product
