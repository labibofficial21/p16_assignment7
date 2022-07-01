const NavLinks = ({ className }) => {
  return (
    <ul className={`navLinks ${className}`}>
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#blog'>Blog</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
