import React from 'react';

export default function Car(props) {
    // 
    console.log(props);
    // để lấy giá trị thuộc tính của đối tượng ta dùng cú pháp: props,ten_thuoc_tinh
  return (
    <>
   <div> xe thương hiệu {props.brand}, Gía {props.price}</div>
    </>
  );
}
