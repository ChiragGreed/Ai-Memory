import "./Hero.scss";

export default function Hero() {

    return (

        <section className="hero">

            <div className="hero-badge">

                <span className="badge-dot" />

                Your personal knowledge OS

            </div>


            <div className="hero-logo">

                <Logo />

            </div>



            <h1 className="hero-title">

                Save anything
                <br />

                <em>Remember everything</em>

            </h1>



            <p className="hero-sub">

                Vexa captures articles, tweets, videos and PDFs from anywhere on the web —
                then automatically tags, connects and resurfaces them when you need them most.

            </p>



            <div className="hero-actions">

                <a href="#install" className="btn btn-primary btn-lg">

                    Download Extension

                </a>


                <a href="/register" className="btn btn-outline btn-lg">

                    Create free account

                </a>

            </div>



            <p className="hero-note">

                Chrome extension · Free · No credit card

            </p>

        </section>

    );

}



function Logo() {

    return (

        <svg width="88" height="88" viewBox="0 0 72 72">

            <rect width="72" height="72" rx="18" fill="#111116" />

            <polygon
                points="13,17 27,17 36,44 45,17 59,17 36,57"
                fill="#e8a930"
            />

            <polygon
                points="31,31 36,44 41,31 36,37"
                fill="#111116"
            />

            <circle cx="36" cy="57" r="5" fill="#f0eee8" />

        </svg>

    );

}