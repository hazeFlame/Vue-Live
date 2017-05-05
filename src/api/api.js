import axios from 'axios'

const api = 'https://www.zhengwentao.com/rest';

export const get = (path, query) => {
  let url;
  if (query) {
    url = `${api}/${path}?${query}`;
  } else if (path) {
    url = `${api}/${path}`;
  } else{
    url = `${api}`;
  }

  return axios(url)
    .then(res => res.data)
    .catch(err => window.console.error(err));
};

export const post = (path,query,datas) => {
  let url;
  if (query) {
    url = `${api}/${path}?${query}`;
  } else {
    url = `${api}/${path}`;
  }

  return axios({
    method: 'post',
    url:url,
    data:datas
  })
  .then(res => res.data)
  .catch(err => window.console.error(err));
};
