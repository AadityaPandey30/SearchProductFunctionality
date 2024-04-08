import React, { useState } from 'react';
import productsData from './ProductsData';

const Pro1 = () => {
  // Sample data
  <productsData />

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const filterProducts = () => {
    const filtered = productsData.filter(product => {
      const isNameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isCategoryMatch = selectedCategory === '' || product.category === selectedCategory;
      const isPriceInRange =
        (minPrice === '' || product.price >= parseInt(minPrice, 10)) &&
        (maxPrice === '' || product.price <= parseInt(maxPrice, 10));

      return isNameMatch && isCategoryMatch && isPriceInRange;
    });
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSearchButtonClick = () => {
    filterProducts();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search product..."
          className='searchbar'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          {/* Add more categories as needed */}
        </select>
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={handleMinPriceChange} className='ht'/>
        </label>
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={handleMaxPriceChange} className='ht'/>
        </label>
      </div>
      <div>
        <h2>List of Products</h2>
        <div className='allLists'>
            <h3>Sl. No.</h3>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Category</h3>
        </div>
    <div className='allLists'>
    <ul className='listline'>
            {filteredProducts.map((product, index) => (
                <li key={index}>{index+1}</li>        
            ))}
        </ul>

        <ul className='listline'>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.name}</li>        
            ))}
        </ul>

        <ul className='listline'>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.price}</li>        
            ))}
        </ul>

        <ul className='listline'>
            {filteredProducts.map((product, index) => (
                <li key={index}>{product.category}</li>        
             ))}
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Pro1;
