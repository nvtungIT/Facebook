import { getPreference } from 'libs/storage/PreferenceStorage';
import { serverDomain } from './variables';

export async function get_post(id) {
  const token = await getPreference('UserToken');

  const url = serverDomain + 'post/get_post';
  const options = {
    method: 'post',
    body: JSON.stringify({
      id,
      token,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return await fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      return json.data; //is a post object
    });
}
