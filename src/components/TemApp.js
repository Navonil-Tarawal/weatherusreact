import React, { useEffect, useState } from 'react';
import "./css/style.css"; 

const TemApp = () => {

    const[city, setCity] = useState('kolkata')
    const[search, setSearch] = useState('kolkata')
    useEffect(
        ()=>{
            const  fetchApi = async()=>{
                const url = "https://api.openweathermap.org/data/2.5/weather?q={search}&appid=b07e576d54f0ee17ace6bbb5b5616bd1"
                const response = await fetchApi(url)
            }
            fetchApi()
        }
    )


    return(
        <>
        <div className='box'>
            <div className='inputData'>
                <input type="search" className='inputField' onChange={(event)=>
                {}}/>

            </div>

       

         <div className="info">
            <h2 className='location'>
            <i class="fa-duotone fa-cloud-bolt-sun fa-fade"></i>
                {city}
            </h2>
            <h1 className='temp'>
                45° Cel

            </h1>

            <h3 className='tempmin_max'> Min : 20°Cel | Max : 50°Cel </h3>  
          </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
        </>
    )

}
export default TemApp;