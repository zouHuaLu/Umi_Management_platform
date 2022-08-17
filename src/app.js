import { message } from 'antd';
// 在此文件中做项目的运行时配置
export const request = {
  // 请求拦截器
  requestInterceptors: [
    (url, options) => {
      console.log(1);
      options.url = 'https://a2vbw1zd.lc-cn-n1-shared.com/1.1' + url;
      options.headers = {
        'X-LC-Id': ' A2Vbw1zdtX02LoANiFuo4BMG-gzGzoHsz',
        'X-LC-Key': 'zvDrmJHPqOzfnFmv2wyBB0fQ',
        'Content-Type': 'application/json',
      };
      return options;
    },
  ],
  // 响应拦截器
  responseInterceptors: [
    async (response, options) => {
      let res = await response.json();
      if (res.objectId && options.method.toLowerCase() === 'post') {
        message.success('添加成功！');
      }
      return {
        data: res.results,
      };
    },
  ],
};
