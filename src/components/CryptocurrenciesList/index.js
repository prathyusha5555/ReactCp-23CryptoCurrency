import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {cryptoCurrenciesData} = this.props
    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptoCurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptoCurrenciesData.map(each => (
            <CryptocurrencyItem
              key={each.id}
              cryptoCurrencyItemDetails={each}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
