import axios from "axios";
import config from "../../config/config";

export const getAllCurrencies = async () => {
  try {
    const path = `${config.apiAddress}/currencies/all`;
    const result = await axios.get(path);
    return result;
  } catch (error) {
    const result = {
      status: error.response.status,
      error: error.response.data.error,
    };
    return result;
  }
};

export const getAllCurrencyStats = async () => {
  try {
    const path = `${config.apiAddress}/currencies/stats`;
    const result = await axios.get(path);
    return result;
  } catch (error) {
    const result = {
      status: error.response.status,
      error: error.response.data.error,
    };
    return result;
  }
};
