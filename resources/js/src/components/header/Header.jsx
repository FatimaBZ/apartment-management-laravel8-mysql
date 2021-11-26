import './header.css'
import background from '../../images/background.jpeg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Welcome Home</span>
               
                <span className="headerTitleLg"><a href="/login" class="hero-btn">Click To Login</a><a href="/register" class="hero-btn1">Click To Register</a></span>
           
            </div>
            
            <img className="headerImg" 
            src={background}></img> 
           
        </div>
    )
}
