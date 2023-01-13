import { token, serverDomain } from './variables';

export async function check_new_item(topId) {
  const url =
    serverDomain + 'post/check_new_item?last_id=' + topId + '&category_id=0';
  let rs = await fetch(url, { method: 'POST' })
    .then((result) => result.json())
    .then((json) => {
      return json.data.new_items;
    });
  return rs;
}
