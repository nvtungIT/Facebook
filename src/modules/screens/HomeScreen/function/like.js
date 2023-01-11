import { token, serverDomain } from './variables';

export function like(id) {
  const url = serverDomain + 'like/like?token=' + token + '&id=' + id;
  fetch(url, { method: 'POST' });
}
