import { token, serverDomain } from './variables';

export async function get_list_posts(params) {
  const {
    posts,
    setPosts,
    setLoading,
    setBottomLoading,
    setLoadingText,
    last_id,
    type,
  } = params;
  let index = last_id != null ? 1 : 0;
  const url =
    serverDomain +
    'post/get_list_posts?token=' +
    token +
    '&last_id=' +
    last_id +
    '&index=' +
    index +
    '&count=20';
  fetch(url, { method: 'POST' })
    .then((res) => res.json())
    .then((json) => {
      if (json.code == '1000') {
        if (type == 'get old posts') {
          let oldPosts = [...posts, ...json.data.posts];
          setPosts(oldPosts);
          setBottomLoading(false);
        } else if (type == 'get new posts') {
          let lastid = posts[0].id;
          let newPosts = [...posts];
          const BreakError = {};
          try {
            json.data.posts.forEach((post) => {
              if (post.id == lastid) {
                throw BreakError;
              } else {
                newPosts = [post, ...newPosts];
              }
            });
          } catch (err) {
            if (err !== BreakError) throw err;
          }
          setPosts(newPosts);
          setLoading(false);
        } else if (type == 'get first time') {
          setPosts(json.data.posts);
          setLoading(false);
        }
      } else {
        setBottomLoading(false);
        setLoadingText('End of list data');
      }
    });
}
