import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const [checking, setChecking] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();

      setIsLogin(Boolean(data.session));
      setChecking(false);
    }

    checkSession();
  }, []);

  if (checking) {
    return (
      <section className="min-h-screen bg-slate-950 p-6 text-white">
        Memeriksa sesi...
      </section>
    );
  }

  if (!isLogin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
