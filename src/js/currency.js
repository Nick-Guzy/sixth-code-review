//Business logic
export default class CurrencyService {
  static async getMoney(amount, currency) {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}/${amount}`);
      const jsonResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statustext}`;
        throw new Error(errorMessage);
      }
      return jsonResponse;
    } catch (error) {
      return error;
    }

  }
}