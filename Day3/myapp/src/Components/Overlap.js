import '../Assets/Css/overlap.css'
function Overlap() {
    return (
        <>
        {/* <header>
	<div>
		<h1>CSS Animate Skew Cards on hover</h1>
	</div>
	<div>
		<a class="header" href="#!">Links</a>
		<a class="header" href="#!">Links</a>
		<a class="header" href="#!">Links</a>
	</div>
</header> */}

<main>
	<div className='card left'>
		<div className='img-cont'>
			<span className='window'><a className="inner" href="#!">Adopt</a></span>
			<img className="img1" src="https://www.mrnmrspet.com/Files/122023/192997202312110950577953.jpg" alt="Img"/>
		</div>
		<div className='content-cont'>
			<span className='card-header'><a href="#!">Bruno</a></span>
			<span className='card-body'>American Cocker Spaniel
Very polite playful gets together easily no aggressiveness...</span>
		</div>
	</div>

	<div className="feature-card card">
		<div className='img-cont'>
			<span className='window'><a className="inner" href="#!">Adopt</a></span>
			<img className='img1' src="https://www.mrnmrspet.com/Files/122023/192595202312101101201933.jpeg" alt=""/>
		</div>
		<div className='content-cont'>
			<span className='card-header'><a href="#!">Ben</a></span>
			<span className='card-body'>
Labrador Retriever
Very friendly dog and very healthy dog...</span>
		</div>
	</div>

	<div className='card right'>
		<div className='img-cont'>
			<span className='window'><a className="inner" href="#!">Adopt</a></span>
			<img className='img1' src="https://www.mrnmrspet.com/Files/122023/190681202312051346412901.jpg" alt=""/>
		</div>
		<div className='content-cont'>
			<span className='card-header'><a href="#!">Oscar</a></span>
			<span className='card-body'>
Golden Retriever
Oscar is very friendly, Calm and loving puppy! Very active!...</span>
		</div>
	</div>
</main>
        </>
    )
}
export default Overlap