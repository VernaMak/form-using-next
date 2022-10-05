import { Button,Loader } from 'semantic-ui-react';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { resolve } from 'styled-jsx/css';
import LoginForm from '../Components/LoginForm';

export default function Home() {
  //before, during and after
  const r= useRouter();

  const [loginState, setLoginState] = useState("before");
  

 

//const HandleButton = () => {
  //if(loginState === "before") {
    //setLoginState("during");
  //}
  //if(loginState === "during"){
  //  setLoginState("after");
  //} 
  //if(loginState === "after") {
  //  r.push("/dashboard");
  //}
//}

const Login = async () => {
setLoginState("during");
await new Promise(resolve => setTimeout(resolve,2000));

setLoginState("after");
await new Promise(resolve => setTimeout(resolve,2000));

r.push("/dashboard");
}
  return (
    <div >
      <LoginForm
        loginState={loginState}
        onLoginClick={()=>Login()}
      ></LoginForm>
      </div>
  )
}
