const React = require('react')
const _ = require('lodash')

//components


module.exports = function App (props) {
  console.log('props', props)
  console.log('state', props.store.getState())

  return (
  <div>
    <div className="banner">
      <h1>gardenApp</h1>
      <h2>Garden, record, enjoy.</h2>
    </div>
    <div>
        <table>
          <thead>
            <tr>
              <th>Current zones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>

      <h2>CART</h2>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <p>Total : $ {0}</p>
        <button type="button" name="checkout" id="checkout">checkout</button>
    </div>
  </div>
  )
}
