
# Currency Exchange React Component

This is a simple currency exchange component built with React. It allows users to convert between different currencies using real-time exchange rates fetched from a public API.

## Features

- Convert between different currencies
- Fetches real-time exchange rates from a public API
- Simple and intuitive user interface

## Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start
   ```

## Usage

To use the component in your own project, simply import it and include it in your JSX:

```jsx
import { CurrencyExc } from './CurrencyExc';

function App() {
  return (
    <div className="App">
      <CurrencyExc />
    </div>
  );
}

export default App;
```

## API Reference

This component uses the [Currency API](https://github.com/fawazahmed0/currency-api) for fetching exchange rates. Refer to the API documentation for more details on usage.


## Acknowledgements

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Material-UI](https://mui.com/) - React components for faster and easier web development
- [Currency API](https://github.com/fawazahmed0/currency-api) - A simple and free API for currency exchange rates
```
