import "./Footer.scss"

export default function Footer() {

    return (

        <footer>

            <div className="footer-brand">

                <Logo />

                <span className="footer-name">

                    Vexa

                </span>

            </div>


            <span className="footer-note">

                Built for the cohort challenge · 2026

            </span>


        </footer>

    );

}



function Logo() {

    return (

        <svg width="22" height="22" viewBox="0 0 72 72">

            <rect width="72" height="72" rx="14" fill="#111116" />

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