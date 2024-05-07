const Home = () => {
  return (
    <section className="home image" id="home">
     <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span> <br /> I am Aseel
              </span>
            </span>
            <span className="position-relative">
              <span className="home-dec animated-layer">
                Sr. Software engineer
              </span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
