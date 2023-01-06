import React from 'react'

const HeroComponent = () => {
  return (
    <div><main className="main-component">

    <div className="left-component">

        <h2>For the teams focused&nbsp;on <br></br>North&nbsp;Star.</h2>
        <img className="star-icon" src="./Assets/Star Icon.svg" alt=""></img>
        <p className="main-component-content">Develop Your Team, Execute Your Strategy <br></br>and Grow Your Business </p>
        <div className="left-component-btn-div">
            <button className=" left-component-btn btn-getstarted">Get Started</button>
            <button className="left-component-btn btn-behind">Get Started</button>
        </div>
    </div>
    <div className="right-component">
        <div className="rightimg">
            <img src="./Assets/Hero Image.png" alt="" style={{width:"49%"}} ></img>
        </div>
        <div className="first-right-component">
            <div className="teamgoal">
                <div className="teamgoal-content">
                    <div className="first-layer">

                        <h3>New Team Goal</h3><img src="./Assets/flag.svg" alt=""></img>
                        <button className="btn-checkin">Check-in</button>
                        <p>Due 20 Dec</p>
                    </div>
                    <div className="intermediate-layer">
                        <img src="./Assets/stargraph.svg" style={{float: "right"}} alt=""></img>
                    </div>
                    <div className="second-layer">
                        <div>

                            <img className="team-img" src="./Assets/team.png" alt=""></img>
                        </div>
                        <div className="progress feedback-progress">
                            <span>
                            75%
                           </span>
                            <p>Overall Progress</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="girlimage">
                <img className="image" src="./Assets/girlsvg.svg" alt=""></img>
            </div>

        </div>
        <div className="second-right-component">
            <div>

                <img className="graph-circle" src="./Assets/graphcircle.svg" alt=""></img>
            </div>
            <div className="feedback">
                <div className="feedback-content">

                    <div className="bargraph">
                        <div className="rect rect1"></div>
                        <div className="rect rect2"></div>
                        <div className="rect rect3"></div>
                    </div>
                    <div className="feedback-content-inside progress ">
                        <span>Instant Feedback!</span>
                        <p>Design Team</p>
                        <button className="btn-checkin btn-feedback">Give Response!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</div>
  )
}

export default HeroComponent