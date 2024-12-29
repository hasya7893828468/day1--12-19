import { useState } from 'react';
import CardData from './Card'
import "./card.css"

const Cards = () => {

    const Data = CardData;

    const [value,setValue] =useState("")

    const CardDataOutput = Data.filter((val)=>{
        if(value==""){
            return val
        }else if(val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
            return val
        }

    })
    .map((val)=>{
        return(
            <>
                <div className="box  m-3 shadow ">
                    <div className="imgBox  w-100 h-100 ">
                        <img src={val.img} alt="" className='h-60' />

                        <div className=" relative  text-xs ">
                            <div className=' bg-white absolute bottom-0 left-0 p-1 m-1 text-xs font-bold rounded'>
                            {val.rating}<i className="fa-solid fa-star text-amber-300"></i> | {val.likes}

                            </div>
                            
    
                        </div>
                        <div className="name font-bold text-start px-1">{val.name}</div>
                        <div className="description text-start px-1  w-100">{val.description}</div>

                            <div className="flex ">
                                <div className="font-bold text-xs px-1 "> RS.{val.price} </div>
                                <div className=" text-xs px-1  text-gray-400	 line-through">  Rs.{val.Dprice}</div>
                                <div className=" text-xs px-1 font-bold text-rose-600">({val.Off } )</div>
                            </div>
                            

                            <div className='relative'>
                            <button className='shadow text-xs p-1 m-2 text-amber-500 rounded'> Shop now</button>

                            </div>
                    </div>
                </div> 
            </>
        )
    })
  return (
    <>
 <div className="col-6 mb-2 shadow rounded ">
                    <input type="search" placeholder='Search the products 'className='p-2  w-100	' onChange={(e)=>{setValue(e.target.value)}} />
                    {/* <i className="fa-solid fa-magnifying-glass ml-5"></i> */}
                </div>    {/* <div>{value}</div> */}
    <div className=" u	 flex flex-wrap ">
    
      {CardDataOutput}
    </div>
    </>
  )
}

export default Cards
