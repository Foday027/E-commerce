import { useState, useEffect } from 'react'
import './App.css'


function App() {
  useEffect(() => {
    async function fetchData() {
      let resp = await fetch('https://raw.githubusercontent.com/lukaszwos/4geeks-ecommerce/master/data.json');
      let respReady = await resp.json();
      setProducts(respReady);
    }
    fetchData();
  }, [])
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');


  const filteredProducts = search.length === 0 ? products :
    products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));



  return (
    <>

      <form>
        <label >
          Find:
        </label>
        <input className='label' onChange={(e) => setSearch(e.target.value)
        }
          type='text'
          placeholder='Search here'
          value={search} />
      </form>


      <table className='table'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Price</th>
            <th>InStock</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map(product => (
            <tr className='table2' key={product.id} >
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.inStock ? 'yes' : 'no'} </td>
              <td>{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App;
