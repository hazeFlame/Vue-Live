import { get, post } from './api.js'

//获取所有平台链接
export const AxiosLive = () =>{
  return get('/site')
}

//--------------------------------------------------------------------------

//获取bilibili直播房间列表信息
export const AxiosBilibiliLive = () =>{
  let path = 'site/1/room'
  let query = 'per_page=20'
  return get(path,query)
}

//获取斗鱼直播房间列表信息
export const AxiosDouyuLive = () =>{
  let path = 'site/2/room'
  let query = 'per_page=20'
  return get(path,query)
}

//获取熊猫直播房间列表信息
export const AxiosXiongmaoLive = () =>{
  let path = 'site/3/room'
  let query = 'per_page=20'
  return get(path,query)
}

//获取战旗直播房间列表信息
export const AxiosZhanqiLive = () =>{
  let path = 'site/4/room'
  let query = 'per_page=20'
  return get(path,query)
}

//获取龙珠直播房间列表信息
export const AxiosLongzhuLive = () =>{
  let path = 'site/5/room'
  let query = 'per_page=20'
  return get(path,query)
}

//获取虎牙直播房间列表信息
export const AxiosHuyaLive = () =>{
  let path = 'site/6/room'
  let query = 'per_page=20'
  return get(path,query)
}

//获取全民Tv直播房间列表信息
export const AxiosQuanminLive = () =>{
  let path = 'site/7/room'
  let query = 'per_page=20'
  return get(path,query)
}

//--------------------------------------------------------------------------

//获取主播房间列表信息
export const AxiosUserPage = (id) =>{
  let path = `room/${id}`
  return get(path)
}

//--------------------------------------------------------------------------

//获取所有平台所有频道
export const AxiosAllChannel = (id) =>{
  let path = `site/${id}/channel?per_page=1000`
  return get(path)
}
//获取所有平台信息
export const AxiosChannelInfo = (id) =>{
  let path = `site/${id}`
  return get(path)
}

//--------------------------------------------------------------------------

//获取频道里面直播数
export const AxiosChannelLive = (id,page) =>{
  let path = `channel/${id}/room`
  let query = `isvue=1&page=${page}`
  return get(path,query)
}

//获取频道里面直播数
export const AxiosChannel = (id) =>{
  let path = `channel/${id}`
  return get(path)
}

//--------------------------------------------------------------------------
