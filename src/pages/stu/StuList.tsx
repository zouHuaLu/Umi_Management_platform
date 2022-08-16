import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getStuList, delStu } from '@/api/stu';
import { useRequest } from 'umi';
interface DataType {
  key: number;
  name: string;
  score: string;
  city: string;
  birth: Date;
  id: number;
}

const StuList = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
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
      render: (text, record, index) => (
        <div>
          <Button type="primary" size="small" style={{ marginRight: '5px' }}>
            编辑
          </Button>
          <Button
            type="primary"
            size="small"
            danger
            onClick={() => {
              handleDel(record);
            }}
          >
            删除
          </Button>
        </div>
      ),
    },
  ];
  let dataSource, dataLoading;
  let { data, loading } = useRequest(async () => {
    let res = await getStuList();
    return res;
  });
  dataSource = data;
  dataLoading = loading;
  const handleDel = (record: DataType) => {
    delStu(record.id).then(() => {
      let { data, loading } = useRequest(async () => {
        let res = await getStuList();
        return res;
      });
      dataSource = data;
      dataLoading = loading;
    });
  };
  return (
    <Table
      loading={dataLoading}
      columns={columns}
      dataSource={dataSource}
      rowKey="id"
    />
  );
};

export default StuList;
