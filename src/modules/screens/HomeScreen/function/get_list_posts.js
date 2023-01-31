import { getPreference } from 'libs/storage/PreferenceStorage';
import { serverDomain } from 'general/constants/Global';
export async function get_list_posts(params) {
  const {
    posts,
    setPosts,
    setLoading,
    setLoadingText,
    last_id,
    newItems,
    type,
  } = params;

  const token = await getPreference('UserToken');

  let index = 0;
  let count = 20;
  if (type == 'get old posts') {
    index = 1;
  }
  if (type == 'get new posts') {
    if (newItems < 20) count = newItems;
  }
  const url =
    serverDomain +
    'post/get_list_posts?token=' +
    token +
    '&last_id=' +
    last_id +
    '&index=' +
    index +
    '&count=' +
    count;
  fetch(url, { method: 'POST' })
    .then((res) => res.json())
    .then((json) => {
      if (json.code == '1000') {
        if (type == 'get old posts') {
          let oldPosts = [...posts, ...json.data.posts];
          setPosts(oldPosts);
          setLoadingText('isLoading');
        } else if (type == 'get new posts') {
          // đoạn này sử dụng nếu muốn nối newposts vào danh sách post trước đó
          // tham số newItems từ check_new_items truyền vào luôn > 0
          // (nếu bằng 0 thì ko gọi hàm này)
          // nếu dùng cách này thì khi tải lại, các post cũ đã có sẽ ko được cập nhật mới nhất
          // trừ khi newItems > 20, khi đó chỉ trả về post mới

          if (newItems < 20) {
            let newPosts = [...posts];
            newPosts = [...json.data.posts, ...newPosts];
            setPosts(newPosts);
          } else {
            setPosts(json.data.posts);
          }
          setLoading(false);
        } else if (type == 'get first time') {
          setPosts(json.data.posts);
          setLoading(false);
        }
      } else if (json.code == '9994') {
        if (type == 'get old posts') setLoadingText('End of list data');
        else if (type == 'get first time') setLoading(false);
        console.log('End of list data');
      } else if (json.code == '9998') console.log('token invalid');
    });
}
