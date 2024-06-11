import React from 'react'

export default function Contact() {
  return <>
    <section className='contact py-5 text-center'>
      <div>
        <h2 className="fw-bolder mb-3">CONTACT SECTION</h2>
      <div className="icon3 mb-3">
      <i className="fa-solid fa-star fa-xl"></i>
      </div>
      <div className="w-50 m-auto">
        <form action="">
          <input type="text" placeholder='User Name' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 m-5' />
          <input type="number" placeholder='User Age' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 m-5' />
          <input type="email" placeholder='Mail' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 m-5' />
          <input type="password" placeholder='Password' className='w-100 form-control form-control-lg border-0 border-bottom rounded-0 m-5'/>
          <button className='btn send m-5'>Send</button>
        </form>
      </div>
    </div>
    </section>
  </>
}
