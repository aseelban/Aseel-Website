const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Aseel Banafeh</span>
        <ul>
          <li>
            <a href="https://github.com/aseelban" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aseelban_" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aseelban" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
