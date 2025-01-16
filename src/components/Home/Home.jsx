import { Link } from "react-router-dom";

Link;
const Home = () => {
  return (
    <>
      <Link to="/catalog">
        <button>View Now</button>
      </Link>
    </>
  );
};
export default Home;
