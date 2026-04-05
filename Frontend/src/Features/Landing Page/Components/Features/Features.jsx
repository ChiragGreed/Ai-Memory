import "./Features.scss";

export default function Features() {

    return (

        <section id="features" className="features">


            <p className="section-label">

                What Vexa does

            </p>



            <h2 className="section-title">

                Your brain,
                <br />

                <em>but it never forgets</em>

            </h2>



            <div className="features-grid">

                <FeatureCard
                    title="Save from anywhere"
                    desc="Capture articles, tweets, videos and PDFs instantly."
                />


                <FeatureCard
                    title="AI tagging"
                    desc="Automatic tags help organise your knowledge."
                />


                <FeatureCard
                    title="Semantic search"
                    desc="Find ideas by meaning, not keywords."
                />

            </div>



            <div className="features-grid-2">

                <FeatureCard2
                    title="Knowledge graph"
                    desc="Visual map of connected ideas."
                />


                <FeatureCard2
                    title="Resurfacing"
                    desc="Important ideas return when relevant."
                />


                <FeatureCard2
                    title="Collections"
                    desc="Organise ideas into structured groups."
                />

            </div>


        </section>

    );

}



function FeatureCard({ title, desc }) {

    return (

        <div className="feature-card">

            <div className="feature-name">

                {title}

            </div>


            <div className="feature-desc">

                {desc}

            </div>

        </div>

    );

}



function FeatureCard2({ title, desc }) {

    return (

        <div className="feature-card-2">

            <div className="feature-name">

                {title}

            </div>


            <div className="feature-desc">

                {desc}

            </div>

        </div>

    );

}