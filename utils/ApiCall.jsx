import axios from "axios";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const fetchData = async (url, auth) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: auth,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const patchUserDataAuth = async (url, auth) => {
  try {
    const response = await axios.patch(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: auth,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (url, auth) => {
  try {
    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: auth,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postDataAuth = async (url, data, auth) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: auth,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const postData = async (url, auth) => {
  try {
    const response = await axios.post(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: auth,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
