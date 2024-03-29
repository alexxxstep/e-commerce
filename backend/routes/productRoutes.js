import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';

// import { getProducts, getProductById } from '../controllers/productController.js';

//@desc Fetch all products
//@route GET api/products
//@access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    // throw new Error('some error');
    res.json(products);
  })
);

//@desc Fetch single product
//@route GET api/products/:id
//@access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

// router.route('/').get(getProducts);
// router.route('/:id').get(getProductById);

export default router;

