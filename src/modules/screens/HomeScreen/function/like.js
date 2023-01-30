import { getPreference } from 'libs/storage/PreferenceStorage'
import { serverDomain } from 'general/constants/Global'

export async function like(id) {
  const token = await getPreference('UserToken')
  const url = serverDomain + 'like/like?token=' + token + '&id=' + id
  fetch(url, { method: 'POST' })
}
