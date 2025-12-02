import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./router/Routes";
import "./styles/layout.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
