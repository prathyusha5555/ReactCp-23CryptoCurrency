import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrenciesList()
  }

  getCryptoCurrenciesList = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    this.setState({
      cryptoCurrenciesData: data.map(each => ({
        currencyName: each.currency_name,
        usdValue: each.usd_value,
        euroValue: each.euro_value,
        id: each.id,
        currencyLogoUrl: each.currency_logo,
      })),
      isLoading: false,
    })
  }

  renderCryptoCurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state
    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {isLoading ? this.renderLoader() : this.renderCryptoCurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
