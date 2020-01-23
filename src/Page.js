import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Page(){
const [background, setBackground] = useState([])
useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=2zwcYEMnhxJY0T7q4IngZjzg5tYo9U6nM7eIHym5')
    .then(response => {
        console.log(response.data)
        setBackground(response.data) 
    })
    .catch(error =>{
        console.log('didnt find response', error)
    })
},[])
return(
<div>
<div className='title-text'>
<p>{background.title}</p>
<p>{background.date}</p>
</div>
<img src={background.url}></img>
<div className='explanation'>
<p>{background.explanation}</p>
</div>
<br></br>
<br></br>
<div><p>Copyright: {background.copyright}</p></div>
</div>
)
}


export default Page