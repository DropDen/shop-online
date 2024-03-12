
function Footer () {
    return <footer className="page-footer grey ">
              <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear()}
                <a 
                  className="grey-text text-lighten-4 right" 
                  href="https://github.com/DropDen/shop-online" 
                  target='_blank' 
                  rel="noreferrer"
                  >REPO
                </a>
                </div>
              </div>
            </footer>
    }
    
    export {Footer};