const headers = {
  'Content-Type': 'application/json',
};

const get = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });
  const result = await response.json();

  return result;
};

const post = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });
  const result = await response.json();

  return result;
};

const http = {
  get,
  post,
};

export default http;
