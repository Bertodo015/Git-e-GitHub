import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-header">
          <Header />
        </div>
        <Card />
      </div>
    </>
  );
}

export default Home;
