import logo from '../img/g-logo.svg';

const Logo = () => {
  return (
    <a href='/' className='navLogo'>
      <img src={logo} alt='logo' />
    </a>
  );
};

export default Logo;
