import { serverDomain } from 'general/constants/Global'
import { getPreference } from 'libs/storage/PreferenceStorage'
export async function accept_request(user_id) {
  const token = await getPreference('UserToken')

  try {
    const response = await fetch(
      serverDomain +
        'friend/set_accept_friend?token=' +
        token +
        '&user_id=' +
        user_id +
        '&is_accept=' +
        1,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        // body: JSON.stringify({
        //   token: token,
        //   user_id: user_id,
        //   is_accept: 1,
        // }),
      },
    )

    const data = await response.json()
    if (data) {
      console.log('accept_friend')
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}
//   const url =
//     serverDomain +
//     'friend/set_accept_friend?token=' +
//     token +
//     '&user_id=' +
//     user_id +
//     '&is_accpept=1'
//   return await fetch(url, { method: 'POST' })
//     .then((result) => result.json())
//     .then((json) => {
//       if (json.code == '1000') {
//         return json.data.new_items
//       } else return 0
//     })
