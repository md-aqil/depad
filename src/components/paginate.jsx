import { Table } from 'antd';
import React from 'react';
import { Pagination } from 'antd';



const columns = [
  {
    dataIndex: 'name',
  },
  {
   
    dataIndex: 'age',
  },
  {
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: `<div></div>`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Paginate extends React.Component {


  render() {
      return <Pagination defaultCurrent={1} total={30} />
   
    // return <Table pagination={{pageSize: 2 }}  columns={columns} dataSource={data} />;
  }
}

export default Paginate;