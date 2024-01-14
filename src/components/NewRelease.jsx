import React from 'react'

const NewRelease = () => {
  return (
    <div className='container'>
        
        <div className='d-flex'>
        <hr  style={{border:'2px solid white', width:'440px',marginTop:'75px'}} />
        <h3 className='text-white ml-9 mr-9' style={{justifyContent:'center', display:'flex',marginTop:'60px'}}>New Release</h3>
        <hr  style={{border:'2px solid white', width:'440px',marginTop:'75px'}} />
        </div>
        
         <div className="m-5 ms-11 d-flex gap-11">
          
        <img className='card shadow mr-4 ms-2' style={{'height':'240px', 'width':'150px'}} src="/img/haikyuu.jpg" alt="" />
        <img className='card shadow mr-4' style={{'height':'240px', 'width':'150px'}} src="/img/haikyuu.jpg" alt="" />
        <img className='card shadow mr-4' style={{'height':'240px', 'width':'150px'}} src="/img/haikyuu.jpg" alt="" />
			  <img className='card shadow mr-4' style={{'height':'240px', 'width':'150px'}} src="/img/haikyuu.jpg" alt="" />
			  <img className='card shadow mr-4' style={{'height':'240px', 'width':'150px'}} src="/img/haikyuu.jpg" alt="" />
        </div>
    </div>
  )
}

export default NewRelease 