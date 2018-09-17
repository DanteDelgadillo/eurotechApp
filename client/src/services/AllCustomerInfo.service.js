import axios from "axios";

let baseUrl = "http://localhost:3001";
baseUrl += "/api";

export const post = data => {
  const url = baseUrl + "/customerLibrary";
  const config = {
    method: "POST",
    url: url,
    data: data,
    withCredentials: true
  };

  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const getAll = () => {
  const url = baseUrl + "/customerLibrary";
  const config = {
    method: "GET",
    withCredentials: true
  };

  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const readById = _id => {
  const url = baseUrl + "/customerLibrary/" + _id;

  const config = {
    method: "GET",
    withCredentials: true
  };

  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const put = user => {
  const url = baseUrl + "/customerLibrary/" + user._id;
  const config = {
    method: "PUT",
    data: user,
    withCredentials: true
  };

  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

export const deleteInfo = _id => {
  const url = baseUrl + "/customerLibrary/" + _id;
  const config = {
    method: "DELETE",
    withCredentials: true
  };

  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  console.log(error);
  return Promise.reject(error);
};
