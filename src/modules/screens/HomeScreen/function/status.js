export function getStatus(modifiedTime) {
  let time = Math.floor(Date.now() / 1000) - modifiedTime; // đơn vị time: giây
  if (time < 60) return 'Vừa xong';
  else {
    time = Math.floor(time / 60); // đơn vị time: phút
    if (time < 60) return time + ' phút';
    else {
      time = Math.floor(time / 60); //đơn vị time: giờ
      if (time < 24) return time + ' giờ';
      else {
        time = Math.floor(time / 24);
        return time + ' ngày';
      }
    }
  }
}
