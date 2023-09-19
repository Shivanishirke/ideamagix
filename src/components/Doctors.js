import React from 'react'
import Hospital from './Hospital'

function Doctors() {
  return (
   <>
   <div className='content-container'>
   <div className='header'>
       <span className="doctors-title">Doctors</span>

       <span className='doctors-description'>Top Orthopaedic  <span className='word'>Doctors</span> </span>

       <div className='content-container'>
   
       <div className='card'>
       <div className='card-image1'>
       
       </div>

       <div className='card-title'>
          
          <span className="doctors-title">Dr Faique Falke</span>
          <strong >Musaffah Industrial - Abu Dhabi</strong>
          <span>Doctor Degree & Specialist</span>
         
          
       </div>
  </div>

  <div className='card'>
  <div className='card-image1'>
  
  </div>

  <div className='card-title'>
     
     <span className="doctors-title">Dr Faique Falke</span>
     <strong >Musaffah Industrial - Abu Dhabi</strong>
     <span>Doctor Degree & Specialist</span>
    
     
  </div>
</div>

<div className='card'>
<div className='card-image1'>

</div>

<div className='card-title'>

<span className="doctors-title">Dr Faique Falke</span>
<strong >Musaffah Industrial - Abu Dhabi</strong>
<span>Doctor Degree & Specialist</span>


</div>
</div>
    
    </div>
   </div>
</div>

<div>
    <Hospital/>
</div>
   
   </>

    
  )
}

export default Doctors