import logo from '../images/VectorLogo.svg';
import {Link} from 'react-router-dom';

function Header(props)
// ({title, route, email, onClick}) 
{
    return (
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            <div className='header__authorization'>
        <p className='header__text'>{props.email}</p>
        <Link to={props.route} className='header__link' onClick={props.onClick}>{props.title}</Link>
      </div>
        </header>
    )
};

export default Header;

// function Header(props) {
//   return (
//     <header className="header">
//       <Link to="/">
//         <img src={logo} alt="Логотип" className="header__logo" />
//       </Link>
//       {props.title === 'Выйти' ?
//         <div className='header__authorization'>
//           <p className='header__text'>{props.email}</p>
//           <Link to={props.route} className='header__link' onClick={props.onClick}>{props.title}</Link>
//         </div>
//         :
//         null
//       }
//     </header>
//   );
// }

// export default Header;