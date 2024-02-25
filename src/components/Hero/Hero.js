import React from "react";
import Search from "./HeroSearch";
import HeroCounter from "./HeroCounter";
import HeroImage from '../../images/hero.png'


export default function Hero() {
    return(
        <main>
            <div className="left">
                <h1>Discover Most Suitable Property</h1>
                <p>Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you</p>
                <Search />
                
                <div className="counters">
                    <div className="individual-counter">
                        <HeroCounter
                            targetCount={9000}
                        />
                        <p>Premium Product</p>
                    </div>

                    <div className="individual-counter">
                        <HeroCounter
                            targetCount={2000}
                        />
                        <p>Happy Customer</p>
                    </div>

                    <div className="individual-counter">
                        <HeroCounter
                            targetCount={28}
                        />
                        <p>Awards Winning</p>
                    </div>
                </div>
            </div>

            <div className="right">
                <center>
                    <img src={HeroImage} alt="heroimg"/>
                </center>
            </div>
        </main>
    )
}
