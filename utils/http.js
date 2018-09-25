import fetch from 'isomorphic-unfetch'
import config from '../config'

const request = async (url, option) => {
  const defaultOption = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const newUrl = `http://localhost:${config.port}` + url;
  const newOption = { ...defaultOption, ...option };
  const request = await fetch(newUrl, newOption);
  return await request.json()
}

export default {
  request,
}