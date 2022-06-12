

export const Artikel = (props) => {
  
  return (
    <div id="artikel" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Artikel</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.sumber1}-${i}`} className="col-md-4 col-sm-6 artikel box ">
                  <div className="thumbnail">
                    {" "}
                    <a href={d.sumber1}><img src={d.img} alt="..." className="artikel-img" /></a>
                    <div className="caption">
                      <p>{d.penulis1}</p>
                      <h4>{d.judul1}</h4>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
