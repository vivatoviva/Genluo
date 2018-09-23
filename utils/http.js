import fetch from 'isomorphic-unfetch'


const request = async (url, option) => {
  const defaultOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const newUrl = 'http://localhost:8080' + url;
  const newOption = { ...defaultOption, ...option };
  const request = await fetch(newUrl, newOption);
  return await request.json()
}

export default {
  request,
}