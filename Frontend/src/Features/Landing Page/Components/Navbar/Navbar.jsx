import './Navbar.scss'

export default function Navbar() {

    return (

        <nav>

            <a href="#" className="nav-brand">

                <Logo />

                <span className="nav-name">
                    Vexa
                </span>

            </a>


            <div className="nav-links">

                <a href="#features" className="btn btn-ghost">
                    Features
                </a>

                <a href="#install" className="btn btn-ghost">
                    Install
                </a>

                <a href="/login" className="btn btn-outline">
                    Sign in
                </a>

                <a href="/register" className="btn btn-primary">
                    Get started
                </a>

            </div>

        </nav>

    );

}



function Logo() {

    return (

        <svg width="28" height="28" viewBox="0 0 72 72">

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