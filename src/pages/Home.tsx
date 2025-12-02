import "../styles/Home.css";
import logo from "../assets/logo.png"
export default function Home() {
  return (
    <section className="home-hero">
      {/* LEFT CONTENT */}
      <div className="home-content">
        <h1>Homemade Food, Delivered Fresh</h1>
        <p>
          Food is more than just a meal — it is a connection. We serve
          wholesome, freshly cooked food made with care, just like home.
        </p>

        <p className="sub-text">
          Daily meals • Corporate Meals • Customized plans
        </p>

        <a target="_blank" href="https://api.whatsapp.com/send/?phone=918317305891&text=Hi%21+I+wish+to+enquire+about+your+services%21&type=phone_number&app_absent=0">
          <button className="cta-btn"> Chat with us</button>
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="home-image">
        <img src={logo} alt="Home cooked meal" />
      </div>
    </section>
  );
}
