import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Signup, Errandersignup, Signinpage, Dashboard, Indoorpage, Outdoorpage, Artisanpage, Outdoorlocation, Payment, Paymentsuccess, Paywithbank, Paywithcard } from "./pages"
// import { Footer, Why, OurProcess, Whatwedo, Hero, OurProducts } from "./containers"
// import { Call, Brand, Navbar } from "./components"
import "./App.css"

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/signupother" element={<Signup />}/>
                    <Route exact path="/signup" element={<Errandersignup />}/>
                    <Route exact path="/signin" element={<Signinpage />}/>
                    <Route exact path="/dashboard" element={<Dashboard />}/>
                    <Route exact path="/indoorerrand" element={<Indoorpage />}/>
                    <Route exact path="/outdoorerrand" element={<Outdoorpage />}/>
                    <Route exact path="/artisanerrand" element={<Artisanpage />}/>
                    <Route exact path="/location" element={<Outdoorlocation />}/>
                    <Route exact path="/payment" element={<Payment />}/>
                    <Route exact path="/paymentsuccess" element={<Paymentsuccess />}/>
                    <Route exact path="/paywithbank" element={<Paywithbank />}/>
                    <Route exact path="/paywithcard" element={<Paywithcard />}/>
                    {/* <Route exact path="/test" element={<Test />}/> */}
                </Routes>
            </Router>
        </div>
    )
}

export default App
