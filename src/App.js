import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

function App() {
  return (
<>
    <div style={{backgroundImage: "url(https://myafrilearn.com/assets/img/bg6.jpg)",height: "500px",backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}>
   
    <div style={{height: "inherit",width: "100%",position: "absolute",left: "0",backgroundColor: "rgba(1,2,16,0.53)"}}>
        <div className="container">
            <div>
                <nav className="navbar navbar-light navbar-expand-md">
                    <div className="container-fluid"><Link className="navbar-brand" to="#" style={{color: "rgba(251,251,251,0.9)"}}><img alt={''} src="https://myafrilearn.com/assets/img/afrilearn_logo.png" width="150"/></Link><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span><i class="fas fa-bars"></i></span></button>
                        <div
                            className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation"><Link className="nav-link" to="#">About</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link" to="#">Faq</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link" to="#">Blog</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link" to="#">Forum</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link" to="#">Contact</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link" to="#">Login</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link" to="#"><button className="btn btn-primary" type="button" style={{backgroundColor: "#036d01",border: "none",width: "150px"}}>REGISTER</button></Link></li>
                            </ul>
                    </div>
            </div>
            </nav>
        </div>
    </div>
        <div className="d-md-flex d-flex justify-content-md-center align-items-md-center">
            <div className="d-flex align-items-center" style={{height:"200px", paddingTop: "50px"}}>
                <div className="container headerContent">
                    <h3 className="text-uppercase text-center" style={{color: "#add144",paddingTop: "0.25em",paddingBottom: "0.25em",fontWeight: "normal",textShadow: "-2px -2px 6px rgba(0,0,0,0.36)"}}>Take the first step</h3>
                    <h1 className="text-uppercase text-center" style={{fontWeight: "bold"}}>Of your journey to success<br></br></h1>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    <div style={{marginTop: "-100px"}}>
    <div className="container">
        <div className="row d-md-flex d-lg-flex justify-content-md-center">
            <div className="col-md-8 headerBox">
                <form>
                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                            <label style={{color: "rgb(90,90,91)",fontWeight: "400"}}>
                            What would you love to learn?
                            </label>
                            <select defaultValue={'0'} className="form-control headerSelect">
                            <option value="0" disabled>Select Course</option>
                            <option value="">Vocational Courses</option>
                            </select></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    
    <div style={{marginTop: "100px"}}>
<div className="container">
    <div className="row">
        <div className="col">
            <h2 style={{fontSize: "25px",fontWeight: "700",color: "#2d2d2d"}}>Free Past Questions</h2>
        </div>
    </div>
    <div className="row">
        <div className="col-md-8">
            <div className="row">
                <div className="col-md-12 innerSection">
                    <div className="innerSectionItem" style={{backgroundColor: "#f3f5f7",backgroundImage: "url(assets/img/waec.jpg)",height: "430px",backgroundRepeat: "no-repeat",backgroundSize: "cover",padding: "0"}}>
                        <div className="innerSectionItemOverlay"><Link to="#" className="contentLink"></Link>
                            <p style={{color: "#f6f7f8",fontSize: "4em",fontWeight: "900",textShadow: "-2px -2px 6px rgba(0,0,0,0.36)"}}>WASSCE</p>
                            <p style={{color: "#f6f7f8"}}>Click to continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-12 innerSection">
                    <div className="innerSectionItem" style={{backgroundImage: "url(assets/img/neco.jpg)",height: "130px",padding: "0",backgroundSize: "cover",backgroundPosition: "center"}}>
                        <div className="innerSectionItemSubOverlay"><Link to="#" className="contentLink"></Link>
                            <p style={{color: "#f6f7f8",fontSize: "20px",fontWeight: "900"}}>NECO</p>
                            <p style={{color: "#f6f7f8"}}>Click to continue</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 innerSection">
                    <div className="innerSectionItem" style={{backgroundColor: "#f3f5f7",backgroundImage: "url(assets/img/jamb.jpg)",height: "130px",padding: "0",backgroundSize: "cover",backgroundPosition: "top"}}>
                        <div className="innerSectionItemSubOverlay"><Link to="#" className="contentLink"></Link>
                            <p style={{color: "#f6f7f8",fontSize: "20px",fontWeight: "900"}}>JAMB/UME</p>
                            <p style={{color: "#f6f7f8"}}>Click to continue</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 innerSection">
                    <div className="innerSectionItem" style={{backgroundColor: "#f3f5f7",backgroundImage: "url(assets/img/gec.jpg)",height: "130px",padding: "0",backgroundSize: "cover",backgroundPosition: "center"}}>
                        <div className="innerSectionItemSubOverlay"><Link to="#" className="contentLink"></Link>
                            <p style={{color: "#f6f7f8",fontSize: "20px",fontWeight: "900"}}>GCE</p>
                            <p style={{color: "#f6f7f8"}}>Click to continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    
    <div style={{marginTop: "50px"}}>
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <h2 style={{color: "#2d2d2d",fontSize: "25px",fontWeight: "700"}}>Professional Exam</h2>
            <div className="row">
                <div className="col-md-4 innerSection" style={{padding: "15px"}}>
                    <div className="text-center innerSectionItem" style={{backgroundColor: "#092b4e",minHeight: "150px"}}><Link to="#" className="contentLink"></Link>
                        <div style={{padding: "10px 0"}}><img alt={''} className="img-fluid" src="assets/img/icon_one.png" width="150"/></div>
                        <div>
                            <p style={{color: "#f6f7f8",fontSize: "20px",fontWeight: "600"}}>ICAN</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 innerSection" style={{padding: "15px"}}>
                    <div className="text-center innerSectionItem" style={{backgroundColor: "#8c212e",minHeight: "150px"}}><Link to="#" className="contentLink"></Link>
                        <div style={{padding: "10px 0"}}><img alt={''} className="img-fluid" src="assets/img/icon_two.png" width="150"/></div>
                        <div>
                            <p style={{color: "#f6f7f8",fontSize: "20px",fontWeight: "600"}}>CCNP</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 innerSection" style={{padding: "15px"}}>
                    <div className="text-center innerSectionItem" style={{backgroundColor: "#365531",minHeight: "150px"}}><Link to="#" className="contentLink"></Link>
                        <div style={{padding: "10px 0"}}><img alt={''} className="img-fluid" src="assets/img/icon_three.png" width="150"/></div>
                        <div>
                            <p style={{color: "#f6f7f8",fontSize: "20px",fontWeight: "600"}}>CCNA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    <div style={{marginTop: "50px",backgroundImage: "url(https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940)",backgroundPosition: "bottom",backgroundAttachment: "fixed"}}>
<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="d-lg-flex row" style={{padding: "50px 20px"}}>
                <div className="col-md-6" style={{backgroundColor: "#f9f9fb",padding: "20px 5%"}}>
                    <div style={{padding: "10px 0"}}>
                        <h3 style={{color: "#2d2d2d",fontSize: "25px",fontWeight: "700"}}>Universities</h3>
                    </div>
                    <p><Link to="#" style={{color: "rgb(0,8,17)",fontSize: "20px",fontWeight: "500"}}>Afrilearn</Link></p>
                    <p><Link to="#" style={{color: "rgb(0,8,17)",fontSize: "20px",fontWeight: "500"}}>Obafemi Awolowo University</Link></p>
                    <p><Link to="#" style={{color: "rgb(0,8,17)",fontSize: "20px",fontWeight: "500"}}>University of &nbsp;Ibadan</Link></p>
                  </div>
            </div>
        </div>
    </div>
</div>
</div>

    <div style={{marginTop: "80px"}}>
<div className="container">
    <div className="row">
        <div className="col-md-12 text-center courseHeading" style={{marginBottom: "30px"}}>
            <h3 className="text-center" style={{color: "#2d2d2d",fontSize: "25px",fontWeight: "700"}}>Courses</h3><img alt={''} className="img-fluid" src="assets/img/starr.png" width="50"/></div>
    </div>
    <div className="row">
        <div className="col-md-6 col-lg-3" style={{padding: "15px"}}><Link to="#" className="contentLink"></Link>
            <div style={{backgroundImage: "url(https://images.pexels.com/photos/6375/quote-chalk-think-words.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940)",height: "200px",backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
            <div style={{backgroundColor: "#00000d",padding: "20px"}}>
                <h2 style={{color: "rgb(248,250,251)",fontSize: "20px",fontWeight: "400"}}>Afilearn</h2>
            </div>
        </div>
        <div className="col-md-6 col-lg-3" style={{padding: "15px"}}><Link to="#" className="contentLink"></Link>
            <div style={{backgroundImage: "url(https://images.pexels.com/photos/6375/quote-chalk-think-words.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940)",height: "200px",backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
            <div style={{backgroundColor: "#00000d",padding: "20px"}}>
                <h2 style={{color: "rgb(248,250,251)",fontSize: "20px",fontWeight: "400"}}>Afilearn</h2>
            </div>
        </div>
        <div className="col-md-6 col-lg-3" style={{padding: "15px"}}><Link to="#" className="contentLink"></Link>
            <div style={{backgroundImage: "url(https://images.pexels.com/photos/6375/quote-chalk-think-words.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940)",height: "200px",backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
            <div style={{backgroundColor: "#00000d",padding: "20px"}}>
                <h2 style={{color: "rgb(248,250,251)",fontSize: "20px",fontWeight: "400"}}>Afilearn</h2>
            </div>
        </div>
        <div className="col-md-6 col-lg-3" style={{padding: "15px"}}><Link to="#" className="contentLink"></Link>
            <div style={{backgroundImage: "url(https://images.pexels.com/photos/6375/quote-chalk-think-words.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940)",height: "200px",backgroundPosition: "center",backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></div>
            <div style={{backgroundColor: "#00000d",padding: "20px"}}>
                <h2 style={{color: "rgb(248,250,251)",fontSize: "20px",fontWeight: "400"}}>Afilearn</h2>
            </div>
        </div>
    </div>
</div>
</div>

<div style={{backgroundColor: "#f2f2f2",marginTop: "100px",padding: "24px 0"}}>
<div className="container">
    <div className="row">
        <div className="col-md-6">
            <ul className="list-inline">
                <li className="list-inline-item"><Link to="#" style={{color: "#2c2c2c"}}>
                    <div className="tooltipp">
                        <i className="fab fa-twitter"></i>
                    <span className="tooltiptext">Follow us on Twitter</span>
                    </div>
                </Link></li>
                <li className="list-inline-item"><Link to="#" className="tooltipp" style={{color: "#2c2c2c"}}>
                    <i className="fab fa-facebook"></i>
                    <span className="tooltiptext">Like us on Facebook</span>
                </Link></li>
                <li className="list-inline-item"><Link to="#" className="tooltipp" style={{color: "#2c2c2c"}}>
                    <i className="fab fa-instagram"></i>
                    <span className="tooltiptext">Follow us on Instagram</span>
                </Link></li>
            </ul>
        </div>
        <div className="col-md-6">
            <p className="text-right" style={{color: "#2c2c2c"}}>© Afrilearn. All Rights Reserved.</p>
        </div>
    </div>
</div>
</div>
</>
    );
}

export default App;
