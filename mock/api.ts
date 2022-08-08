import mockjs from 'mockjs';
let datalist = mockjs.mock({
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
});
export default {
  'GET /classes/stulist': datalist,
  'DELETE /classes/stu': (req: any, res: any) => {
    console.log(req.query);
  },
};
