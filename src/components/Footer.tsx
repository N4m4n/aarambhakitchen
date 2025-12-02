import "../styles/Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Contact:{" "}
        <a href="mailto:contact@aarambhakitchen.com">
          contact@aarambhakitchen.com
        </a>
      </p>
      <p>
        <a href="tel:+918317305891">+91 8317305891</a> |{" "}
        <a href="tel:+916362905891">+91 6362905891</a>
      </p>
      <p>© {new Date().getFullYear()} Aarambha Kitchen</p>
    </footer>
  );
}

