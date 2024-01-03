import { Home } from 'lucide-react';
import { Search } from 'lucide-react';
import { ListMusic } from 'lucide-react';
import { StepBack } from 'lucide-react';
import { StepForward } from 'lucide-react';
import { Play } from 'lucide-react';
import '../assets/css/layout.css'
const Layout = () => {
    return (
        <>
            <div className="navt">
                <h1> isai</h1>
            </div>
            <div className="body">
                <div className="navs">
                    <div className="home">
                        <div className="home_l">
                            <h1>  <Home />  <span>Home</span></h1>
                        </div>
                        <div className="home_l">
                            <h1> <Search /> <span>Search</span></h1>
                        </div>
                    </div>


                    <div className="navdiv">
                        <img className="img" src="https://miro.medium.com/v2/resize:fit:1024/1*Up8iD0NvJXWUAAht-ihAdA.jpeg" />
                        <div className="name">
                            <h2>Melody</h2>
                        </div>
                    </div>
                    <div className="navdiv">
                        <img className="img" src="https://goodmenproject.com/wp-content/uploads/2022/08/iStock-1357724216.jpg" />
                        <div className="name">
                            <h2>Love song</h2>
                        </div>
                    </div>
                    <div className="navdiv">
                        <img className="img" src="https://i1.sndcdn.com/avatars-000114729845-rmfffo-t500x500.jpg" />
                        <div className="name">
                            <h2>Mass song</h2>
                        </div>
                    </div>
                    <div className="navdiv">
                        <img className="img" src="https://wallpapers.com/images/hd/aesthetic-music-collage-of-pop-songs-dgvx78iz8s7odmqf.jpg" />
                        <div className="name">
                            <h2>Playlists</h2>
                        </div>
                    </div>
                </div>
                {/* <div className="song">
                    <img className="melody" src="https://miro.medium.com/v2/resize:fit:1024/1*Up8iD0NvJXWUAAht-ihAdA.jpeg" />
                  <div className="bar">
                    <div className="for">
                    <StepBack />
                    </div>
                    <div className="play">
                    <Play />
                    </div>
                    <div className="to">
                    <StepForward />
                    </div>
                  </div>
                </div> */}
            </div>
        </>
    )
}
export default Layout;