import { Data } from './CardData'
import './Showcard.css'

const ShowCard = () => {
const CardData = Data;
 const Card = CardData.map((item)=>{
    return(
    <>
        <div className='box m-2 shadow border '>
            <div className='p-1'>
                <img className='h-70 w-100' src={item.img} alt="" />
            </div>
            <div className='text-center mt-2'>
                <p className='text-md'>{item.Name}</p>
                <p className='text-xl font-bold '>{item.Offer}</p>
                <button className=' rounded mb-2'>{item.button}</button>
            </div>
        </div>
        </>
    )
 })
  return (
   <>
 <div  className='container   flex flex-wrap items-center justify-center'>

 {Card}
 
 </div>
   </>
  )
}

export default ShowCard