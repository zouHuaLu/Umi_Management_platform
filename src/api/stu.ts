import { request } from 'umi';

// 获取列表
export const getStuList = () => {
  return request('/classes/stu', {
    method: 'GET',
  });
};

// 删除
export const delStu = (id: number) => {
  return request(`/classes/stu?id=${id}`, {
    method: 'DELETE',
  });
};
