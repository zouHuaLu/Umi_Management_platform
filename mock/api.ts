import mockjs from 'mockjs';
export default {
  'GET /classes/stulist': mockjs.mock({
    code: 200,
    msg: 'success',
    'data|100': [
      {
        name: '@cname',
        score: '@integer(0,100)',
        city: '@city',
        birth: '@date',
        'id|+1': 1,
      },
    ],
  }),
};
