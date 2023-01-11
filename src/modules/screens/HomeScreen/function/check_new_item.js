import { token, serverDomain } from './variables';

export async function check_new_item(topId) {
  const url =
    serverDomain + 'post/check_new_item?last_id=' + topId + '&category_id=0';
  fetch(url, { method: 'POST' })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data.new_items);
    });
}
