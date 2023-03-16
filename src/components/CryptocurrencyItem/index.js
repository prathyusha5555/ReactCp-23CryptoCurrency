import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyItemDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogoUrl,
  } = cryptoCurrencyItemDetails
  return (
    <li className="crypto-currency-item">
      <div className="currency-logo-container">
        <img src={currencyLogoUrl} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
