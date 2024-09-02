import './index.css'
import {useState, useEffect} from 'react'

import Card from '../Card'

const HomePage=()=>{ 
    
    const[data, setData]=useState([])
    

    useEffect(()=>{  
        const details=async ()=>{

            const data=await fetch('https://apis.ccbp.in/tg/packages') 
            const response= await data.json()
            const {packages}=response  
            const formatData=packages.map((each)=>(
                {
                    name:each.name ,
                    image:each["image_url"],
                    id:each.id, 
                    description:each.description
    
                }
            ))
        
            console.log(formatData)
    
            setData(formatData)
        }  

        details()
        

    },[])
    


    return( 
        <div className='homePageLayout'> 
            <h1 className='mainHeadingStyle'>Travel Guide</h1> 
            <hr className='MainDeadLine' style={{color:"skyblue"}}/>  
            <ul className='list'> 
                {data.map((each)=><Card CardDetails={each} key={each.id}/>)}

            </ul> 

            </div>
    )
    
    } 


export default HomePage