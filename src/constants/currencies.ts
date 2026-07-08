export type Currency = {
  code: string;
  name: string;
  flag: string;
  symbol: string;
};

export const CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar',            flag: '🇺🇸', symbol: '$'  },
  { code: 'EUR', name: 'Euro',                 flag: '🇪🇺', symbol: '€'  },
  { code: 'GBP', name: 'British Pound',        flag: '🇬🇧', symbol: '£'  },
  { code: 'JPY', name: 'Japanese Yen',         flag: '🇯🇵', symbol: '¥'  },
  { code: 'AUD', name: 'Australian Dollar',    flag: '🇦🇺', symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar',      flag: '🇨🇦', symbol: 'C$' },
  { code: 'CHF', name: 'Swiss Franc',          flag: '🇨🇭', symbol: 'Fr' },
  { code: 'CNY', name: 'Chinese Yuan',         flag: '🇨🇳', symbol: '¥'  },
  { code: 'HKD', name: 'Hong Kong Dollar',     flag: '🇭🇰', symbol: 'HK$'},
  { code: 'SGD', name: 'Singapore Dollar',     flag: '🇸🇬', symbol: 'S$' },
  { code: 'INR', name: 'Indian Rupee',         flag: '🇮🇳', symbol: '₹'  },
  { code: 'KRW', name: 'South Korean Won',     flag: '🇰🇷', symbol: '₩'  },
  { code: 'BRL', name: 'Brazilian Real',       flag: '🇧🇷', symbol: 'R$' },
  { code: 'MXN', name: 'Mexican Peso',         flag: '🇲🇽', symbol: '$'  },
  { code: 'ZAR', name: 'South African Rand',   flag: '🇿🇦', symbol: 'R'  },
  { code: 'SEK', name: 'Swedish Krona',        flag: '🇸🇪', symbol: 'kr' },
  { code: 'NOK', name: 'Norwegian Krone',      flag: '🇳🇴', symbol: 'kr' },
  { code: 'DKK', name: 'Danish Krone',         flag: '🇩🇰', symbol: 'kr' },
  { code: 'NZD', name: 'New Zealand Dollar',   flag: '🇳🇿', symbol: 'NZ$'},
  { code: 'MYR', name: 'Malaysian Ringgit',    flag: '🇲🇾', symbol: 'RM' },
  { code: 'THB', name: 'Thai Baht',            flag: '🇹🇭', symbol: '฿'  },
  { code: 'IDR', name: 'Indonesian Rupiah',    flag: '🇮🇩', symbol: 'Rp' },
  { code: 'PHP', name: 'Philippine Peso',      flag: '🇵🇭', symbol: '₱'  },
  { code: 'TRY', name: 'Turkish Lira',         flag: '🇹🇷', symbol: '₺'  },
  { code: 'PLN', name: 'Polish Złoty',         flag: '🇵🇱', symbol: 'zł' },
  { code: 'CZK', name: 'Czech Koruna',         flag: '🇨🇿', symbol: 'Kč' },
  { code: 'HUF', name: 'Hungarian Forint',     flag: '🇭🇺', symbol: 'Ft' },
  { code: 'RON', name: 'Romanian Leu',         flag: '🇷🇴', symbol: 'lei'},
  { code: 'ILS', name: 'Israeli Shekel',       flag: '🇮🇱', symbol: '₪'  },
  { code: 'ISK', name: 'Icelandic Króna',      flag: '🇮🇸', symbol: 'kr' },
];
