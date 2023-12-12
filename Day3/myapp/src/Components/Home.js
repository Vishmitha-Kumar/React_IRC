import dog from '../Assets/Images/dog.jpg'


const Home=()=>
{
    return(
        
        <div>
            
            <img className="adopt" src = {dog}/>
            <div className="quote-container">
            <p>Adopt a forever friend today!</p>
            <a href="#" className="register-button">Register</a>

            <h2>Browse pets from our network of over 11,500 shelters and rescues.</h2>
            </div>
        </div>
        
    )
}
export default Home