import Navbar from "../components/Navbar";
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <>
      <Navbar/>
      <div className="ErrorPage">
        <h1>Error</h1>
        <h1>404</h1>
      </div>
    </>
  );
}