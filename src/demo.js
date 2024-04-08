import React, { useState, useEffect } from 'react';
import ProductsData from './ProductsData';

const Demo = () => {
    <ProductsData />

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = () => {
    const filtered = ProductsData.filter(product => {
      const isNameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isCategoryMatch =
        selectedCategory === '' || product.category === selectedCategory;
      const isPriceInRange =
        (minPrice === '' || product.price >= parseInt(minPrice, 10)) &&
        (maxPrice === '' || product.price <= parseInt(maxPrice, 10));

      return isNameMatch && isCategoryMatch && isPriceInRange;
    });
    setFilteredProducts(filtered);
  };

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = e => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = e => {
    setMaxPrice(e.target.value);
  };

  const handleSearchButtonClick = () => {
    filterProducts();
  };

  useEffect(() => {
    setFilteredProducts(ProductsData);
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={handleSearchChange}
          className='searchbar ht'
        />
        <button onClick={handleSearchButtonClick} style={{height: "32px",margin: "0 5px"}}>Search</button>
      </div>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange} style={{height: "32px",margin: "0 5px"}}>
          <option value="">All Categories</option>
          {Array.from(new Set(ProductsData.map(product => product.category))).map(
            category => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className='ht'
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className='ht'
          />
        </label>
      </div>
      <div>
      <h2>List of Products</h2>
    <div className='allLists'>
    <ul className='listline'>
        <h3>Sl. No.</h3>
            {filteredProducts.map((product, index) => (
                <li key={index}>{index+1}</li>        
            ))}
        </ul>

        <ul className='listline'>
            <h3>Product</h3>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.name}</li>        
            ))}
        </ul>

        <ul className='listline'>
            <h3>Price</h3>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.price}</li>        
            ))}
        </ul>

        <ul className='listline'>
            <h3>Image URL</h3>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.mainImage.url}</li>        
            ))}
        </ul>

        <ul className='listline'>
            <h3>Image ID</h3>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.mainImage._id}</li>        
            ))}
        </ul>

        {/* <ul className='listline'>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.category}</li>        
             ))}
        </ul> */}
    </div>
      </div>
    </div>
  );
};

export default Demo;
