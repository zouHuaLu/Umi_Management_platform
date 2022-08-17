import React from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { cateAdd } from '@/api/cake.js';
import { useRequest } from 'umi';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CatePub = () => {
  const [form] = Form.useForm();
  let { data, loading, run } = useRequest(
    (values) => {
      return cateAdd(values);
    },
    {
      manual: true,
    },
  );
  const onFinish = (values) => {
    run(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="note" label="分类名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};
export default CatePub;
