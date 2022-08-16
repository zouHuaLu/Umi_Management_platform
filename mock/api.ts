import mockjs from 'mockjs';
let datalist = mockjs.mock({
  code: 200,
  msg: 'success',
  'results|100': [
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
  'GET /classes/stu': datalist,
  // 跟回调函数
  'DELETE /classes/stu': (req: any, res: any) => {
    let { id } = req.query;
    datalist.results.forEach((item: any, index: number) => {
      if (item.id == id) {
        datalist.results.splice(index, 1);
        res.send({
          code: 200,
          msg: '删除成功！',
        });
      }
      return;
    });
    res.send({
      code: 100,
      msg: '未找到数据',
    });
  },
};
