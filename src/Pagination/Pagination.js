import React, { useState } from 'react';
// import Pagination from './pagination';
// import { paginate } from './Paginate';
import 'antd/dist/antd.css';
import _ from 'lodash';
import { Pagination } from 'antd';

const Page = () => {

const [Item , setItem] = useState([
  {id:0},{id :1},{id:2},{id:3},{id:4},{id:5},{id:6},
  {id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13}
  ,{id:14},{id:15},{id:16}
]);

const [pageSize] = useState(5);
const [currentPage , setcurrentPage] = useState(1);

const count = Item.length

if (count === 0)
return <p>no data</p>

const Items = paginate(Item, currentPage, pageSize);

const handlePageChange = (page) => {
  setcurrentPage(page)
}


return(

<>
<p>showing {count} item in the database.</p>


<table className="table">
          <thead>
            <tr>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {Items.map(e =>
              <tr key={e.id}>
                <td>{e.id}</td>
              </tr>
            )}
          </tbody>
        </table>

<Pagination 
defaultCurrent={1}
  pageSize={pageSize} // 한페이지에 보여지는 데이터 수
  // showLessItems={count} //총 데이터 개수
  // current={currentPage}
  onChange={handlePageChange} //클릭된 페이지
  total = {count} //가져올 데이터 개수
  />
</>
)}
export default Page;

//pageNumber:
//items:
//pageSize:


export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize; // 자를 배열의 시작점
  
    return _(items)
      .slice(startIndex) // 시작점부터 배열을 자르되
      .take(pageSize) // pageSize만큼의 배열을 취함
      .value(); // lodash wrapper 객체를 regular 배열로 변환
  }