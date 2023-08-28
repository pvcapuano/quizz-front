import { Suspense } from "react";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
        <h3 className="text-3xl font-bold text-center mb-4">AWS Quizz</h3>
        <div className="space-y-4">
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Login;
