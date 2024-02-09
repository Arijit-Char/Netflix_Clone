import React, { useState, useEffect } from "react";
import "./Home.scss";
import Card from "../Card/Card";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const apiKey = "5bae9d7810c95db0029165c632bda3a9";
const url = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2 style={{ margin: ".8rem", fontWeight: "200" }}>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}` + item.backdrop_path} />
        ))}
      </div>
    </div>
  );
};
function Home() {
  const [Purl, setPurl] = useState([]);
  const [Turl, setTurl] = useState([]);
  const [Lurl, setLurl] = useState([]);

  useEffect(() => {
    const getPurl = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}movie/popular?api_key=${apiKey}`);
      setPurl(results);
    };
    const getTurl = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}tv/popular?api_key=${apiKey}`);
      setTurl(results);
    };
    const getLurl = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}movie/top_rated?api_key=${apiKey}`);
      setLurl(results);
    };

    getPurl();
    getTurl();
    getLurl();
  }, []);
  console.log();

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: Purl[2]
            ? `url(${`${imgUrl}/${Purl[2].poster_path}`})`
            : "rgb(16, 16, 16)",
          backgroundPosition: "35% 20%",
        }}
      >
        {Purl[2] && <h1>{Purl[2].original_title}</h1>}
        {Purl[2] && <p>{Purl[2].overview}</p>}
        <div>
          <button>
            <FaPlay />
            Play{" "}
          </button>
          <button>
            {" "}
            <FaPlus />
            My List{" "}
          </button>
        </div>
      </div>
      <Row title={"Popular on Netflix"} arr={Purl} />
      <Row title={"Tv Series"} arr={Turl} />
      <Row title={"Top Rated"} arr={Lurl} />
    </div>
  );
}

export default Home;
