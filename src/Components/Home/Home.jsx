import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedData from "../FeaturedData/FeaturedData";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedData></FeaturedData>
        </div>
    );
};

export default Home;