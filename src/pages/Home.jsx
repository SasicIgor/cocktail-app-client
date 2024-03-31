import "./../styles/home.scss"
import Button from "../components/Button";
const Home = () => {
    return <div className="home">
        <h1>Welcome to the wonderful world of cocktails!</h1>
        <p>join us today so we can help you grow your bartending skills</p>
        <div className="buttons">
            <Button type="button" label="Sign Up" className="home_button"/>
            <Button type="button" label="Sign In" className="home_button"/>
        </div>
    </div>
}

export default Home;
