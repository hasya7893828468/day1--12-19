import React from 'react'
import "./nav.css"

const Nav = () => {
  return (
    <>
        <nav className=' rounded'>
         <div
            className="row justify-content-center align-items-center  h-14 g-2 "
         >
            <div className="col-1 h2 ">LOgo</div>
            <div className="col-5   ">
                <ul className='d-flex justify-content-evenly align-items-center'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                 
                    <li>
                        <a href="#">ShopNow</a>
                    </li> 
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">ContactUs</a>
                    </li>
                </ul>
            </div>
            <div className="col-6  ">
               <div
                className="row justify-content-center align-items-center g-2"
               >
                <div className="col-6 mb-2 shadow rounded ">
                    <input type="search" placeholder='Search the products 'className='p-2 w-100 	' />
                    {/* <i className="fa-solid fa-magnifying-glass ml-5"></i> */}
                </div>
                <div className="col-2">
                    <button className='btn shadow mb-2 '> Sign in </button>
                </div>
                <div className="col-2"><i className="fa-brands fa-opencart "> </i>Cart</div>
               </div>
               
            </div>
         </div>
         


        </nav>
        <nav>
            <div
                className="row justify-content-center align-items-center g-2  border-top rounded m-1 p-1"
            >
                <button className="col">How it work</button>
                <button className="col">our Services</button>
                <button className="col">Pricing</button>
                <button className="col">Blogs</button>
                <button className="col">Offers</button>
                <button className="col">About</button>
                <button className="col">Helpline</button>

            </div>
            
        </nav>


    </>
  )
}

export default Nav
