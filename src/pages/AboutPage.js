import about from '../img/drawkit-support-woman-colour.svg';
import caretright from '../img/caret-right-solid.svg';

const AboutPage = () => {
  return (
    <section className='about-page' id='about'>
      <div className='section-center'>
        <h2
          className='section-title'

        >
          About Me
        </h2>
        <div className='section-content'>
          <img src={about} alt='' />
          <p className='section-text'>
            Saya sekarang sedang magang offline di ENA Indonesia dan saya Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            <br />
            I am a self-taught front-end developer with an eye for design, and a
            background of content writing.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            lacinia dolor. Vestibulum ut elit eget sem egestas vehicula.
            Curabitur a feugiat mauris. Ut imperdiet facilisis libero ac
            faucibus.
            <br />
            Here are a few technologies I've been working with:
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
