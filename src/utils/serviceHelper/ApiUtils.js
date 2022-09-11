export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function parseJSON(response) {
  return response.data;
}

export function convertObjToQueryParam(data) {
  return Object.keys(data)
    .map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    })
    .join("&");
}
