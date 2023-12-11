import dog from '../Assets/Images/dog.jpg'

const Home=()=>
{
    return(
        
        <div>
            <img className="adopt" src = {dog}/>
            <div className="quote-container">
            <p>Adopt a forever friend today!</p>
            </div>
        </div>
        
    )
}
export default Home