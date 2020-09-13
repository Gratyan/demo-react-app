import React, {Component} from 'react'

class Price extends Component {
    state = {
        price: this.props.price,
        currency: '$'
    }

    handleClick = () => {
        if (this.state.currency === '$'){
            this.setState({
                price: this.state.price * 487,
                currency: '֏'
            })
        } else {
            this.setState({
                price: this.state.price / 487,
                currency: '$'
            })
        }
        
    }

    render () {
        return (
            <div>
                <>Price: {parseFloat(this.state.price)}{this.state.currency} </>
                <button onClick={this.handleClick}>Change the currency</button>
            </div>
        )
    }
    
}

export default Price