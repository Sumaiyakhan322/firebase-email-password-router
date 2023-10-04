import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {
    const authInfo=useContext(AuthContext);
    console.log(authInfo);
    return (
        <div>
            This is home
          <p>  {
                authInfo.name
            }</p>
        </div>
    );
};

export default Home;