import "./Landing.scss";
import Nav from "../../components/Nav/Nav";
import AlertNav from "../../components/AlertNav/AlertNav";
export default function Landing() {
  return (
    <main className="landing">
      <AlertNav />
      <Nav />
    </main>
  );
}
