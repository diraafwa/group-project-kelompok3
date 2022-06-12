export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        {/* <div className='navbar-header'> */}
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <a className='navbar-brand page-scroll' href='#header'>
            <div className="header-logo">
              <img src="http://www.kcsindo.com/assets/landing/logo.png" alt="" />
            </div>
          </a>{' '}

            <li>
              <a href='#about' className='page-scroll'>
                Tentang Kami
              </a>
            </li>
            <li>
              <a href='#artikel' className='page-scroll'>
                Artikel
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Layanan
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galeri
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Klien
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>

            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
          </div>
        {/* </div> */}
      </div>
    </nav>
  )
}
