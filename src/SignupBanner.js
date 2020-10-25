import React from 'react'
import './SignupBanner.css'

function SignupBanner() {
    return (
        <div className="banner">
            {/* <img className="movies__banner"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/eb57c9a2-2512-45fa-8f99-32e86fc34f5d/PK-en-20201019-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
            /> */}

            <div className="signup__details">
                <h1>100% entertainment.<br/> Pay for 1 month, get 1 <br/>month free.</h1>
                <span className="first__span">Watch anywhere, Cancel anytime.</span>
                <span className="second__span">Ready to watch? Enter your email to create or restart your membership</span>
                
                <div className="signup__form">
                <input type="text" placeholder="Email address" />
                <button>GET 1 MONTH FREE</button>
                </div>

                <span className="second__span">Only new members are eligible for this offer</span>
            </div>
        </div>
    )
}

export default SignupBanner
