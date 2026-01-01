import React from 'react'

const Cards = ({userData}) => {
  return (
    <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
        
        {userData.map(function(elem){
          return (
            
            <div key={elem.id} className='bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300'>
              
               <a href={elem.url} target='_blank'>
                <img 
                 className='h-64 w-full object-cover' 
                 src={`https://picsum.photos/id/${elem.id}/400/300`} 
                 alt="Random Click" 
                 loading='lazy'
                />
               
  
               <div className='p-3'>
                 <h2 className='font-semibold text-gray-700'>{elem.author}</h2>
               </div>
               </a>

            </div>
          )
        })}

      </div>
  )
}

export default Cards
