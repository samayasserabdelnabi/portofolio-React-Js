import React, { useState } from 'react'

export default function Portfolio() {
  const [data, setData] = useState(
    [
      {img:"./poert1.png", id:"img1"},
      {img:"./port2.png", id:"img2"},
      {img:"./port3.png", id:"img3"},
      {img:"./poert1.png", id:"img4"},
      {img:"./port2.png", id:"img5"},
      {img:"./port3.png", id:"img6"},
    ]);
  return <>
  <section className='portfolio py-5 text-center'>
    <div>
        <h2 className="fw-bolder mb-3">PORTFOLIO COMPONENT</h2>
        <div className="icon3 mb-3">
          <i className="fa-solid fa-star fa-xl"></i>
      </div>
      <div className="container">
        <div className="row g-4">
            {data.map((item) => (
          <>
            <div className="col-md-4">
              <div className='portfolio-item'>
                  <img src={item.img} alt="" className='w-100 rounded-3' />
                  <div className='plus rounded-3'>
                    <i className="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
          </>
          ))}
          
        </div>
      </div>
    </div>
  </section>
  </>
}
