const headers = {
  'Content-Type': 'application/json',
};

const get = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    throw response;
  }
  return response.json();
};

const post = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });
  if (!response.ok) {
    throw response;
  }

  return response.json();
};

const http = {
  get,
  post,
};

export default http;
