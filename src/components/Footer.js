import React from 'react';


    const Footer = ()=>{
    
  return (
    <div className='main-footer'>
       <div className='container'>
        <div className='row'>
            {/* column 1 */}
            <div className='col'> 
            <h4>my name</h4>
            <ul className='unorderlist'>
            <li>07903445677</li>
            <li>nairobi kenya</li>
            <li>0000ee</li>
            </ul>
            </div>
            {/* colum 2 */}
            <div className='ccl'>
                <h4>stuff</h4>
                <ul className='unorderlist'>
                <li>stuff</li>
                <li>other stuff</li>
                <li>good  stuff</li>
                </ul>
            </div>
            {/* column 3  */}


            <div className='ccl'>
                <h4>some other</h4>
                <ul className='unorderlist'>
                <li>stuff</li>
                <li>other stuff</li>
                <li>good  stuff</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className='row2'>
            <p className='col-sm'>
                &copy;{new Date().getFullYear()} my name | All rights reserved | Terms of service | Privacy
                </p> 

        </div>
        </div> 
    </div>
  )
}

export default Footer