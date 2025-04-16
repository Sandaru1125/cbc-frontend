export default function LoginPage() {
    return (
        <div className="w-full bg-blue-500 h-screen  bg-[url(sandaru-bg.jpg)] bg-center flex">
            <h1>Login Page</h1>
            <div className=" w-[50%] h-full ">   


            </div>
            <div className=" w-[50%] h-full flex justify-center items-center">   
<div className="w-[450px] h-[600px] border backdrop-blur-xl rounded-xl flex flex-col justify-center items-center">
    <input className="w-[400px] h-[50px] border border-white rounded-lg text-center m-[10px]" type="email" placeholder="Email" />
    <input className="w-[400px] h-[50px] border border-white rounded-lg text-center  m-[10px]" type="password" placeholder="Password" />
   <button className="w-[400px] h-[50px] bg-green-500 rounded-lg text-center cursor-pointer">Login</button>
    </div>
            </div>
        </div>
    )
} 