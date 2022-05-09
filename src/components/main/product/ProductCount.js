import React from 'react'

import ReactDOM from 'react-dom'

class PriceCount extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      count: 0,
      price: 32,
      secondPrice: 712
    }
  }

  Increment = () => {
    this.setState({ count: this.state.count += 1 });
    this.setState({price: this.state.price * 2})
    this.setState({secondPrice: this.state.secondPrice * 2})
  };


  Decrement = () => {
    if(this.state.count == 0){
     this.setState({count: (this.state.count = 0)})
     this.setState({price: this.state.price = 32*2})
     this.setState({secondPrice: this.state.secondPrice = 712 * 2})

    }
    else{
      this.setState({count: (this.state.count - 1)})
    }
    this.setState({ price: this.state.price - this.state.price / 2 });
    this.setState({ secondPrice: this.state.secondPrice - this.state.secondPrice / 2 });
  };

  render(){
    return (
      <>

      <p className='product-price mb-3'>
        ${this.state.price} /Cs <span className='text-oz'>($0.21/oz)</span>${this.state.secondPrice} / Pit
      </p>
      
      <p>Approx. Lead Time: <span className='product-date'>12 days</span> </p>
      <p className='product-info-text'>Information about product was provided by manufacturer</p>


     <div className='d-flex align-items-center'>
       <div className='d-flex  price-box mt-5 me-3'>
         <span className='pe-5 price-count-info'>{this.state.count}</span>
          <div className='d-flex price-add-button flex-column'>

            <button onClick={() => this.Increment() } className='price-buttons'>
              <i className='bx price-icons bx-caret-up'></i>
            </button>

            <button onClick={() => this.Decrement()} className='price-buttons'>
              <i className='bx price-icons bx-caret-down'></i>
            </button>

          </div>
        </div>

        <div className='mt-5'>
          <button className='price-count-buttons prime-color me-3'>
            <i className='bx text-white me-2 category-icon bx-basket' ></i>
            Add to Cart
          </button>
          <button className='price-count-buttons '>
            <i className='bx me-2  bx-cog'></i>
            Custom Pallet
          </button>
        </div>


      </div>
      <p className='mt-3 mb-3 pallet-quantity'>Minimum pallet quantity: 2</p>

      <a href='#'>
      <i className='bx me-2 bx-star' ></i>
      Add To Wishlist
      </a>
      </>
    )
  }
}

export default PriceCount;