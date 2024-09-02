import './index.css'

const Card=(props)=>{  
    const{CardDetails}=props 
    const{name,id,image,description}=CardDetails
    return(
        <li className='cardLayout'key={id} > 
            <img src={image} className='photoLayout' alt="q"/>  
            <h1 className='head'>{name}</h1>
            <p className='Para'>{description}</p>

        </li>
    )
} 

export default Card