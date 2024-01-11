import PropTypes from 'prop-types'
const Hero=({heroName})=>{
    if(heroName==='Joker')
    {
        throw new Error('Not a hero')
    }
    return (<div>{heroName}</div>)
}
Hero.propType={
    heroName:PropTypes.string.isRequired
}
export default Hero