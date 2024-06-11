import React from 'react'

export default function Footer() {
return <>
<footer className='pt-5 text-center'>
    <div className="container pb-5">
        <div className="row">
            <div className="col-md-4">
                <div>
                    <h2 className='text-white fw-bold mb-3'>LOCATION</h2>
                    <p className='text-white mb-3'>2215 John Daniel Drive</p>
                    <p className='text-white mb-3'>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h2 className='text-white fw-bold mb-3'>AROUND THE WEB</h2>
                    <div className='icons d-flex justify-content-center'>
                        <div className='icon d-flex justify-content-center align-items-center me-2'>
                        <i className="fa-brands fa-facebook fa-l text-white"></i>
                        </div>
                        <div className='icon d-flex justify-content-center align-items-center me-2'>
                        <i className="fa-brands fa-twitter fa-l text-white"></i>
                        </div>
                        <div className='icon d-flex justify-content-center align-items-center me-2'>
                        <i className="fa-brands fa-linkedin fa-l text-white"></i>
                        </div>
                        <div className='icon d-flex justify-content-center align-items-center me-2'>
                        <i className="fa-brands fa-github fa-l text-white "></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <h2 className='text-white fw-bold mb-3'>ABOUT FREELANCER</h2>
                    <p className='text-white mb-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
    <div className='py-3 footer-feet'>
        <p className='text-white'>Copyright © Your Website 2021</p>
    </div>
  </footer>
  
  </>
}
