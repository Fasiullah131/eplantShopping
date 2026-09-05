import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice'

function CartItem() {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> : 
        items.map(item => (
          <div key={item.id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
            <img src={item.image} width="50" />
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}))}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))}>+</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </div>
        ))
      }
      <h3>Total: ${calculateTotalAmount()}</h3>
      <button>Coming Soon</button>
      <button>Continue Shopping</button>
    </div>
  )
}
export default CartItem
