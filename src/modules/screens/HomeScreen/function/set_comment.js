import { getPreference } from 'libs/storage/PreferenceStorage';
import { serverDomain } from './variables';

export async function set_comment(params) {
  const token = await getPreference('UserToken');

  const { comment, postId } = params;
  const url =
    serverDomain +
    'comment/set_comment?token=' +
    token +
    '&id=' +
    postId +
    '&comment=' +
    comment +
    '&index=0&count=20';
  fetch(url, { method: 'POST' });
}
