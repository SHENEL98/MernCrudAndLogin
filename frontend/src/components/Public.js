import { Link } from "react-router-dom";


const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Mern Simple CRUD and login application </span></h1>
            </header>
            <main className="public__main">
                <p>Make sure, have been connected to your mangoDB database.</p>
                <address className="public__addr">
                    W.S.A.Kurera <br />
                    Verona ,Italy<br />
                    <a href="tel:+393757858099">(+39) 3757858099</a>
                </address>
                <br />
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}

export default Public