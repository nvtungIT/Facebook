import { getPreference } from 'libs/storage/PreferenceStorage'
import { serverDomain } from 'general/constants/Global'
export async function delete_post(postId) {
  const token = await getPreference('UserToken')

  const url = serverDomain + 'post/delete_post?token=' + token + '&id=' + postId
  fetch(url, { method: 'POST' })
    .then((data) => data.json())
    .then((json) => {
      console.log(json)
    })
}
