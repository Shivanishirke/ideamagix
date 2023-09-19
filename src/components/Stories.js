import React from 'react'
import Doctors from './Doctors'

function Stories() {
  return (
    <>
    <div className='content-container'>

         
    <div className='header'>
    <span className='title-patient'>Patient Stories & Videos</span>

    <div className='content-container'>
       
       <div className='card'>
            <div className='card-title'> 
                       <strong>Underwent Procedure for</strong>
                       <strong>retinal detachment</strong>
            </div>


            <div className='card-image'>
            <img
            src="https://media.istockphoto.com/id/469046110/photo/medical-staff-practicing-cpr.jpg?s=2048x2048&w=is&k=20&c=vbMKqkK8iST_J33SAkIX8RcTLvo1feTWNvsmpbsOWWY="
            alt="card_img"
            className="card_img"
          />
            </div>

            <div className='card-title'>
               
               <strong>Luke Olfert</strong>
               <span>New York, USA</span>
              
               
            </div>
       </div>

       <div className='card'>
             <div className='card-title'>
             <strong>Underwent Colonoscopy and</strong>
             <strong>Medical Management</strong>
             </div>

             <div className='card-title'>
                <span>Loreum ipsum dolor sit amet,consectetur adipiscing</span>
                <span>elit,sed do eiusmod tempor incididunt ut labore et</span>
                <span>dolore magna aliqua.Ut enim ad minim veniam,quis </span>
                <span>nostrud exercitation ullamco laboris nisi ut aliquip ex</span>
                <span>ea commodo consequat.Duis aute irure dolor in</span>
                <span>reprehenderit in voluptate velit esse cillum dolore eu</span>
                <span>fugiat nulla pariatur.</span>
                
             </div>

             <div className='card-title'>
             
             <strong>Luke Olfert</strong>
             <span>Sydney, Australia</span>

             </div>
       </div>
    
    </div>
    
    </div>

    

    
</div>

   <div>
      <Doctors/>
   </div>
    
    </>
   
  )
}

export default Stories