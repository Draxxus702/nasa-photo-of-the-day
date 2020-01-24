import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap'


function Page(){
const currentDate = new Date()
const month = currentDate.getMonth()+1
const year = currentDate.getFullYear()
const day = currentDate.getDate()
const [background, setBackground] = useState([])
const [date, setDate] = useState(`${year}-${month}-${day}`)
useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=2zwcYEMnhxJY0T7q4IngZjzg5tYo9U6nM7eIHym5&date=${date}`)
    .then(response => {
        console.log(response)
        setBackground(response.data) 
    })
    .catch(error =>{
        console.log('didnt find response', error)
    })
},[date])

console.log('this is background', background.url)

return(
<div className='card-page'>
<div className='card-of-the-day'>
<Card inverse>
        <CardImg width="100%" src={background.hdurl} alt="Card image cap" />
    <CardImgOverlay>
        <CardTitle><h3>{background.title}</h3></CardTitle>
        <CardText className='date'>{background.date}</CardText>
        <CardText className='content'>{background.explanation}</CardText>
        <CardText>
            <small className="copyright">Copyright: {background.copyright}</small>
        </CardText>
    </CardImgOverlay>
</Card>
</div>
</div>
)
}


export default Page
{/* <img src='/images/background.jpg' alt="space"></img> */}



    {/* <div className='title-text'>
        <h3>{background.title}</h3>
        
        <p>{background.date}</p>
    </div>
    <img src={background.url}></img>
    <div className='explanation'>
        <p>{background.explanation}</p>
    </div>
<br></br>
<br></br>
    <div>
        <p>Copyright: {background.copyright}</p>
    </div> */}