import "./Landing.scss";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
import Footer from "../../components/Footer/Footer";
export default function Landing() {
  return (
    <main className="landing">
      <AlertNav />
      <Nav />
      <Footer />
    </main>
  );
}
