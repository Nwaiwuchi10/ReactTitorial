<img alt="image" src={props.imgName}/>


<Pix imgName='logo512.png'/>
<Pix imgName='logo192.png'/>
<Pix imgName='hy.jpeg' />
<Pix text='puyol'/>






import PropTypes from 'prop-types'
import Button from './button'




const Header = ( {title, onAdd, showAdd } ) => {

    return (
        <header className='header'>
    <h1> {title}</h1>
    <Button 
    color={showAdd ? 'red' : 'green'}
    text={showAdd? 'close' : 'Add'}
    onClick={onAdd} />
    

     
        </header>

    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS 



export default Header




Pix style={{width:'20%'}}
imgName='hy.jpeg'/>
<Pix style={{width:'100%'}}
imgName='images/fire1.gif'/>
<Pix imgName='nad.jpg' />
