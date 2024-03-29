import React from "react"
import Header from "../components/Header"
import '../cssFiles/About.css'
import '../App.css'

function About() {
    return(
        <div>
            <Header />

            <div class="intro">
            <h1 class ="centered">What is Hackstreet?</h1>
            <h3 class="centered">Hackstreet's mission is to make finding your perfect home easy, accessible, and approachable.</h3>
            </div>

            <div class="how">
            <h2 class="skewLeft">How does it work?</h2>
            <p class="skewLeft">Hackstreet takes your inputted preferences of location, price, and status to recommend viable housing for your individual situation. </p>
            </div>

            <div class="finance">
            <h2 class="skewRight">Finance? We've got you covered.</h2>
            <p class = "skewRight">Finance isn’t easy. A lot needs to be considered when finding a home perfect for you. Our finance page has been made to make learning the ins and outs of this life skill easily approachable.</p>
            </div>

            <div class = "account">
            <h2 class = "skewLeft">Stay connected.</h2>
            <p class="skewLeft">Sign up today to track your journey in financial literacy and keep home options accessible in one place!</p>
            </div>
        </div>
    )
}

export default About