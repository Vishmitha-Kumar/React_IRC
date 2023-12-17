// import { Home } from 'lucide-react';
import { Bone } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import { PawPrint } from 'lucide-react';
import Nav from '../Components/Nav'
import {Link} from 'react-router-dom'
import Home from '../Components/Home'
function Dashboard() {
    return (
        <>
            <div className="viewport">
                <div className="sidebar">
                    <header>
                     <li className="db"> <PawPrint /> Petty pet</li>
                     
                    </header>
                    <ul class="navb">
                            <Link to='/home'>
                        <li  className='H'>
                                Home
                        </li>
                            </Link>
                            <Link to='/home'>
                        <li>
                            Accessories
                        </li>
                        </Link>
                        <Link to='/home'>
                        <li>
                            Food
                        </li>
                        </Link>
                    </ul>
                </div>

                <div className="content">
                    <Nav/>
                    <div className="container-fluid">
                             
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard