import './AuthCTA.scss'

export default function AuthCTA() {

    return (

        <section className="auth-cta">


            <AuthCard
                eyebrow="Returning user"
                title="Sign in to your brain"
                desc="Access everything you've saved."
                button="Sign in"
                login
            />


            <AuthCard
                eyebrow="New here"
                title="Start building your second brain"
                desc="Create a free account."
                button="Create account"
            />


        </section>

    );

}



function AuthCard({ eyebrow, title, desc, button, login }) {

    return (

        <div className={`auth-card ${login ? "auth-card--login" : "auth-card--register"}`}>

            <p className="auth-card-eyebrow">

                {eyebrow}

            </p>


            <h3 className="auth-card-title">

                {title}

            </h3>


            <p className="auth-card-sub">

                {desc}

            </p>


            <a
                href={login ? "/login" : "/register"}
                className={login ? "btn btn-primary" : "btn btn-outline"}
            >

                {button}

            </a>

        </div>

    );

}