const Section = ({ className, title, children }) => {
  return (
    <section className={className}>
      <h2 className='section-title'>{title}</h2>
      <div className='section-body'>{children}</div>
      <div className='section-footer'></div>
    </section>
  );
};

export default Section;
