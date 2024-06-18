
import image from "../assets/img/doguito404.svg"
import '../assets/css/404.css'

function Page404() {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image}></img>
            <p className="notfound-text">esta pagina no existe</p>
        </main>
    )
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3461874580.
export default Page404;