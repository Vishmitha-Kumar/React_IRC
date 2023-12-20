
import Footer from '../Components/Footer'
import '../Assets/Css/footer.css'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <>
          <div className="navi">
            <ul>
                <Link to='/login'>
            <input type="submit" value="Login" className="in" />
            </Link>
            </ul>
          </div>
            <div className="textdiv">
                <h1>Adopt a forever friend today!</h1>
                <h2>Adopting a pet isn't just giving a home; it's opening your heart to a lifetime of unconditional love, shared laughter, and pawprints that leave imprints on your soul. In choosing adoption, you not only change their world but allow them to transform yours.</h2>
                {/* <h3>Adopt a pet</h3> */}
                <Link to='/register'>
                <input type="submit" value="Register" className="auth-btn" />
                </Link>
            </div>
            <div className="first">
                {/* <div class="firstpic"> */}
                <img className="firstpic" src="https://www.zigly.com/media/wysiwyg/Shelter_Stray_Dogs.png" />
                {/* </div> */}
                <div className="firstData">
                    <h1>Stary dogs:Why Adopt??</h1>
                    <h3>Adopting a street dog will save their life, giving them a second chance to have a home and live a dignified and happy life.Animal shelters and rescue groups are brimming with happy, healthy pets just waiting for someone to take them home.</h3>
                </div>
            </div>
            <div className="second">
                <div className="secondData">
                    <h1>Foreign breeds:Why ??</h1>
                    <h3> Discover breeds like the affectionate Labrador Retriever from Canada and the intelligent Border Collie from Scotland, each bringing their exceptional qualities to the table.Whether you're looking for a canine partner for outdoor adventures or a diligent companion for training activities.</h3>
                </div>
                {/* <div class="secondpic"> */}
                <img className="secondpic" src="https://img2.10bestmedia.com/Images/Photos/379272/GettyImages-104489865_55_660x440.jpg" />

                {/* </div> */}
            </div>
            <div className="thrid">
                {/* <div class="thridpic"> */}
                <img className="thridpic" src="https://khpet.com/cdn/shop/articles/how-late-is-too-late-to-train-an-older-dog_800x800.jpg?v=1593019997" />

                {/* </div> */}
                <div className="thridData">
                    <h1>Trained dogs</h1>
                    <h3>All of our trained dogs all have been a ton of places, have been worked by a variety of different people and will absolutely be the best-behaved pet you’ve ever owned! We also do provide personal and family protection dogs, service dogs and emotional support dogs too!</h3>
                </div>
            </div>
            <div className="emergency">
                <div className="fourData">

                    <h1>Emergency !</h1>

                </div>
                <Link to='/form'>
                <input type="submit" value="To Rescue" className="fourPic" />
                </Link>
            </div>
            <Footer/>
        </>
    )
}
export default Home