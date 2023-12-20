import Dash from './Dash'
import { PawPrint } from 'lucide-react';
import Footer from '../Components/Footer'
function Cpet() {
    return (
        <>
            <Dash />
            <div className="dhead">
            <h1> Cats  <PawPrint /></h1>
                {/* <h2>A true friend</h2>  */}
             </div>
            <div className="cgcont">

                <div class="ccard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <p>Adopt ur friend</p>
                    
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
            </div>
            <div className="cgcont2">
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
            </div>
            <div className="cgcont3">
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
            </div>
            <div className="cgcont4">
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
                <div class="ccard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="catbtn" />
                </div>
            </div>


                  <div className="footy">
                     <Footer/>
                     </div>
        </>
    )
}
export default Cpet