import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const popularProducts = [
	{
	  id: '3432',
	  product_name: 'Macbook M1 Pro 14"',
	  product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
	  product_price: '$1499.00',
	  product_stock: 341,
	  total_Sales: 20,
	},
	{
	  id: '7633',
	  product_name: 'Samsung Galaxy Buds 2',
	  product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
	  product_price: '$399.00',
	  product_stock: 24,
	  total_Sales: 20,
	},
	{
	  id: '6534',
	  product_name: 'Asus Zenbook Pro',
	  product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
	  product_price: '$899.00',
	  product_stock: 56,
	  total_Sales: 20,
	},
	{
	  id: '9234',
	  product_name: 'LG Flex Canvas',
	  product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
	  product_price: '$499.00',
	  product_stock: 98,
	  total_Sales: 20,
	},
	{
	  id: '4314',
	  product_name: 'Apple Magic Touchpad',
	  product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
	  product_price: '$699.00',
	  product_stock: 0,
	  total_Sales: 20,
	},
	{
	  id: '4342',
	  product_name: 'Nothing Earbuds One',
	  product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
	  product_price: '$399.00',
	  product_stock: 453,
	  total_Sales: 20,
	},
  ];

function PopularProducts() {
  const [sortedProducts, setSortedProducts] = useState(popularProducts);
  const [sortCriteria, setSortCriteria] = useState('totalSales');

  const handleSortChange = (event) => {
    const criteria = event.target.value;
    setSortCriteria(criteria);
    sortProducts(criteria);
  };

  const sortProducts = (criteria) => {
    const sorted = [...sortedProducts];
    if (criteria === 'totalSales') {
      sorted.sort((a, b) => b.totalSales - a.totalSales);
    } else if (criteria === 'stock') {
      sorted.sort((a, b) => a.stock - b.stock);
    }
    setSortedProducts(sorted);
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1" style={{ overflowX: 'auto' }}>
      <div className="flex justify-between items-center mb-3">
        <strong className="text-gray-700 font-medium">Product Sell</strong>
        <select
          value={sortCriteria}
          onChange={handleSortChange}
          className="px-2 py-1 border border-gray-300 rounded-md text-sm"
        >
          <option value="totalSales">Last 30 Days</option>
          <option value="stock">Last 15 days</option>
        </select>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3" style={{ overflow: 'hidden' }}>
        <div className="hidden md:flex">
          <h1 className="relative flex-1">Product Name</h1>
          <h1 className="relative flex-1">Stock</h1>
          <h1 className="relative flex-1">Price</h1>
          <h1 className="relative flex-1">Total Sales</h1>
        </div>
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.product_name}</p>
              <span
                className={classNames(
                  product.stock === 0
                    ? 'text-red-500'
                    : product.stock > 50
                    ? 'text-green-500'
                    : 'text-orange-500',
                  'text-xs font-medium'
                )}
              >
                {product.stock === 0 ? 'Out of Stock' : `${product.stock} in Stock`}
              </span>
            </div>
            <div className="text-xs text-gray-400 flex-1">{product.product_price}</div>
            <div className="text-xs text-gray-400 flex-1">{product.product_stock}</div>
            <div className="text-xs text-gray-400 flex-1">{product.total_Sales}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
