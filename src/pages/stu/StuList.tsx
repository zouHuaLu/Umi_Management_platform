import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState, useEffect } from 'react';
import { getStuList } from '@/api/stu';
interface DataType {
  key: number;
  name: string;
  score: string;
  city: string;
  birth: Date;
}

const columns: ColumnsType<DataType> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '分数',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '出生日期',
    key: 'birth',
    dataIndex: 'birth',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <div>
        <Button type="primary" size="small" style={{ marginRight: '5px' }}>
          编辑
        </Button>
        <Button type="primary" size="small" danger>
          删除
        </Button>
      </div>
    ),
  },
];

const StuList = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    getStuList().then((res) => {
      setData(res.data);
    });
  }, []);
  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default StuList;
