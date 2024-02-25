import React from "react";
import ValuesImg from "../../images/values.png"
import IndependentValue from "./IndividualValue";

export default function Value() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleDescription = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };    

    return(
        <section className="values" id="value">
            <div className="left">
                <img src={ValuesImg} alt="valuesimg"/>
            </div>

            <div className="right">
                <h2>Our Value</h2>
                <h1>Value We Give to You</h1>
                <p>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>

                <div className="values-container">
                    <IndependentValue
                        index={0}
                        isOpen={openIndex === 0}
                        icon1="fa-solid fa-shield"
                        title="Best interest rates on the market"
                        description="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
                        toggleDescription={() => toggleDescription(0)}
                    />

                    <IndependentValue
                        index={1}
                        isOpen={openIndex === 1}
                        icon1="fa-solid fa-circle-xmark"
                        title="Prevent unstable prices"
                        description="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
                        toggleDescription={() => toggleDescription(1)}
                    />

                    <IndependentValue
                        index={2}
                        isOpen={openIndex === 2}
                        icon1="fa-solid fa-chart-simple"
                        title="Best price on the market"
                        description="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
                        toggleDescription={() => toggleDescription(2)}
                    />
                </div>
            </div>
        </section>
    )
}
