import express from 'express';
import { ProductAdd, ProductDelete, ProductEdit, ProductGet, ProductGetOne } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/allProduct', ProductGet);
router.post('/addProduct', ProductAdd);
router.get('/oneProduct/:id', ProductGetOne);
router.patch('/editProduct/:id', ProductEdit);
router.delete('/deleteProduct/:id', ProductDelete);

export default router;