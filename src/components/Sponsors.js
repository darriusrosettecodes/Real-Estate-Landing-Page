import React from "react";
import sponsor1 from ".././images/sponsor1.png"
import sponsor2 from ".././images/sponsor2.png"
import sponsor3 from ".././images/sponsor3.png"
import sponsor4 from ".././images/sponsor4.png"

export default function Sponsors() {
    return(
        <section className="sponsors">
            <img src={sponsor1} />
            <img src={sponsor2} />
            <img src={sponsor3} />
            <img src={sponsor4} />
        </section>
    )
}