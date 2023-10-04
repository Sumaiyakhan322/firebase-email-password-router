import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
  const {signIn,googleSignIn}=useContext(AuthContext)
  const navigate=useNavigate()

    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
          console.log(result.user);
          e.target.reset()
          navigate('/')

        })
        .catch(error=>{
          console.log(error.message);
        })
      
    }
    const handleGoogleLogIn=(e)=>{
      e.preventDefault();
      googleSignIn()
      .then()
      .catch(error=>{
        console.log(error);
      })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="p-4 text-center">New to this website <Link to='/register'>Go to register</Link></p>
      <p><button className="btn btn-ghost btn-sm" onClick={handleGoogleLogIn}>Google</button></p>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Login;