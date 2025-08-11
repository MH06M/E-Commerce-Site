import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import '../styles/ProductList.css';

export default function ProductList(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(()=>{
    async function fetchProducts(){
      try{
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        if(!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }
    fetchProducts();
  },[]);

  const categories = React.useMemo(()=>{
    const set = new Set(products.map(p=>p.category));
    return ['all', ...Array.from(set)];
  },[products]);

  const visible = products.filter(p=>{
    const matchesSearch = (p.title + p.description).toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' ? true : p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <div className="status">Loading products…</div>;
  if (error) return <div className="status error">Error: {error}</div>;

  return (
    <section className="product-section">
      {!selected && (
        <>
          <div className="controls">
            <input
              placeholder="Search products..."
              value={search}
              onChange={e=>setSearch(e.target.value)}
            />
            <select value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)}>
              {categories.map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="grid">
            {visible.map(p=> (
              <ProductCard
                key={p.id}
                product={{
                  id: p.id,
                  name: p.title,
                  price: `$${p.price}`,
                  description: p.description,
                  category: p.category,
                  image: p.image
                }}
                onViewDetails={()=>setSelected(p)}
              />
            ))}
          </div>
        </>
      )}
      {selected && (
        <ProductDetails product={selected} onClose={()=>setSelected(null)} />
      )}
    </section>
  );
}
