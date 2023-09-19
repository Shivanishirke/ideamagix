import React from 'react'
import Footer from './Footer'

function Hospital() {
  return (
    <>
    <div className='content-container'>
    <div className='header'>
        <span className="doctors-title">Hospitals</span>
 
        <span className='doctors-description'>Recommended <span className='word'>   Hospitals</span> </span>
 
        <div className='content-container'>
    
        <div className='card'>
        <div className='card-image'>
            <img
            src="https://media.istockphoto.com/id/469046110/photo/medical-staff-practicing-cpr.jpg?s=2048x2048&w=is&k=20&c=vbMKqkK8iST_J33SAkIX8RcTLvo1feTWNvsmpbsOWWY="
            alt="card_img"
            className="card_img"
          />
            </div>
 
        <div className='card-title'>
           <strong className='hospital-name'>Apollo Hospital</strong>
           <span className="doctors-title">Banglore</span>
            
        </div>
   </div>
 
   <div className='card'>
   <div className='card-image'>
            <img
            src="https://media.istockphoto.com/id/469046110/photo/medical-staff-practicing-cpr.jpg?s=2048x2048&w=is&k=20&c=vbMKqkK8iST_J33SAkIX8RcTLvo1feTWNvsmpbsOWWY="
            alt="card_img"
            className="card_img"
          />
            </div>
 
   <div className='card-title'>
           <strong className='hospital-name'>Medanta Hospital</strong>
           <span className="doctors-title">Gurgaon</span>
            
        </div>
 </div>
 
 <div className='card'>
 <div className='card-image'>
            <img
            src="https://media.istockphoto.com/id/469046110/photo/medical-staff-practicing-cpr.jpg?s=2048x2048&w=is&k=20&c=vbMKqkK8iST_J33SAkIX8RcTLvo1feTWNvsmpbsOWWY="
            alt="card_img"
            className="card_img"
          />
            </div>
 
 <div className='card-title'>
           <strong className='hospital-name'>Jaslok Hospital</strong>
           <span className="doctors-title">Mumbai</span>
            
        </div>
 </div>
     
     </div>


     <span >Don't hesitate, contact us for better help and  services.<span className='explore_word'>Explore all Hospitals</span></span>

    <Footer/>
    </div>
 </div>
    
    </>
  )
}

export default Hospital