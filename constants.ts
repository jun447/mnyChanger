/**
 * An array of objects representing different currencies and their values in rupees.
 * @typedef {Object} Currency
 * @property {string} name - The name of the currency.
 * @property {number} value - The value of the currency in rupees.
 * @property {string} flag - The flag of the country associated with the currency.
 * @property {string} symbol - The symbol of the currency.
 */

/**
 * An array of objects representing different currencies and their values in rupees.
 * @type {Currency[]}
 */
export const currencyByRupee: Currency[] = [
    {
      name: 'DOLLAR',
      value: 0.012271428,
      flag: '🇺🇸',
      symbol: '$',
    },
    {
      name: 'EURO',
      value: 0.01125809,
      flag: '🇪🇺',
      symbol: '€',
    },
    {
      name: 'POUND',
      value: 0.0099194378,
      flag: '🇬🇧',
      symbol: '£',
    },
    {
      name: 'RUBEL',
      value: 0.85040469,
      flag: '🇷🇺',
      symbol: '₽',
    },
    {
      name: 'AUS DOLLAR',
      value: 0.01732574,
      flag: '🇦🇺',
      symbol: 'A$',
    },
    {
      name: 'CAN DOLLAR',
      value: 0.016457908,
      flag: '🇨🇦',
      symbol: 'C$',
    },
    {
      name: 'YEN',
      value: 1.5909089,
      flag: '🇯🇵',
      symbol: '¥',
    },
    {
      name: 'DINAR',
      value: 0.0037446993,
      flag: '🇰🇼',
      symbol: 'KD',
    },
    {
      name: 'BITCOIN',
      value: 0.000000543544886,
      flag: '🎰',
      symbol: '₿',
    },
  ];
  