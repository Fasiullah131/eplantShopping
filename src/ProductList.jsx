import { useDispatch } from 'react-redux'
import { addItem } from './CartSlice'
import { plants } from './plantData'

function ProductList() {
  const dispatch = useDispatch()
  
  // 3 categories bana rahe hain
  const categories = ["Indoor", "Succulent", "Flowering"]

  return (
    <div className="product-list-container">
      <h2>Our Plants</h2>
      
      {categories.map(category => (
        <div key={category}>
          <h3>{category} Plants</h3>
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{border: '1px solid gray', padding: '10px', width: '200px'}}>
                <img src={plant.image} alt={plant.name} width="180" />
                <h4>{plant.name}</h4>
                <p>Price: ${plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ProductList
