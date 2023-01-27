import { serverDomain } from 'general/constants/Global'
export async function check_new_item(topId) {
  const url =
    serverDomain + 'post/check_new_item?last_id=' + topId + '&category_id=0'
  return await fetch(url, { method: 'POST' })
    .then((result) => result.json())
    .then((json) => {
      if (json.code == '1000') {
        return json.data.new_items
      } else return 0
    })
}
