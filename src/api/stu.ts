import { request } from 'umi';

export const getStuList = () => {
  return request('/classes/stulist', {
    method: 'GET',
  });
};
