import Banner from "./Banner";
import PopularProducts from "./PopularProducts";
import RecommendedProducts from "./RecommendedProducts";


const Home = () => {
    return (
        <div className="container">
            <Banner/>
            <PopularProducts/>
            <PopularProducts/>
            {/* <RecommendedProducts/>
             */}
        </div>
    );
};

export default Home;