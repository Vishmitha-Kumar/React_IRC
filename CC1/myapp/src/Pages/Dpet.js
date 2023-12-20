import Dash from './Dash'
import { Bone } from 'lucide-react';
import Footer from '../Components/Footer'
function Dpet() {
    return (
        <>
            <Dash />
            <div className="dhead">
            <h1> Dogs <Bone /></h1>
                {/* <h2>A true friend</h2>  */}
             </div>
            <div className="dgcont">

                <div class="dcard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <p>Adopt ur friend</p>
                    
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont2">
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont3">
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont4">
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/nature/330x200" />
                    <h4>Rolex</h4>
                    <p>2yrs,male,Trained dog</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/food/330x200" />
                    <h4>Food</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img src="https://source.unsplash.com/category/buildings/330x200" />
                    <h4>Buildings</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.</p>
                    <input type="submit" value="Adopt" className="dogbtn" />
                </div>
            </div>


                  <div className="footy">
                     <Footer/>
                     </div>
        </>
    )
}
export default Dpet