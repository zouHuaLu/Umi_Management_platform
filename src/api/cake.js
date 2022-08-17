import { request } from 'umi';

// 新增分类
export const cateAdd = (cateObj) => {
  return request('/classes/CakeCate', {
    method: 'POST',
    data: cateObj,
  });
};
