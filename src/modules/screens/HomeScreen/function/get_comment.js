import { getPreference } from 'libs/storage/PreferenceStorage';
import { serverDomain } from './variables';

export async function get_comment(params) {
  const { postId, setComments, setLoading } = params;
  const token = await getPreference('UserToken');

  const url =
    serverDomain +
    'comment/get_comment?token=' +
    token +
    '&id=' +
    postId +
    '&index=0&count=20';
  fetch(url, { method: 'POST' })
    .then((data) => data.json())
    .then((json) => {
      if (json.code == 1000) {
        setComments(json.data);
      } else {
        setComments([]);
      }
      setLoading(false);
    });
}
