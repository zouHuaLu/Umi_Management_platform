import React from 'react'
import { Button } from 'antd';
import {history} from 'umi'
export default function Test() {
  let toHomePage = ()=>{
    history.push('/')
  }
  return (
    <Button type="primary" onClick={toHomePage}>普通按钮</Button>
  )
}
