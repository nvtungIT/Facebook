import { token, serverDomain } from './variables';

export function set_comment(params) {
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
