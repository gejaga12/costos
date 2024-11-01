"use client";
import LoginForm from '../../components/login/LoginForm';

const LoginPage = () => {

  return (
    <div className="flex justify-center items-center min-h-screen relative bg-white dark:bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/fondo1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative w-full max-w-sm p-6 border rounded-lg shadow bg-black bg-opacity-50 backdrop-filter backdrop-blur-base">      
        <LoginForm />
      </div>     
    </div>
  );
};

export default LoginPage;
