function Filter({ categories=[], selectedCategory, onCategoryChange }) {
    const handleCategoryChange = (event) => {
      const newCategory = event.target.value;
      onCategoryChange(newCategory);
    };
  
    return (
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    );
  }
  
  export default Filter;