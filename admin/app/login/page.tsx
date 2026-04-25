'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
      const { token, admin } = res.data.data;
      document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
      document.cookie = `admin=${JSON.stringify(admin)}; path=/; max-age=${7 * 24 * 60 * 60}`;
      router.push('/dashboard');
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mb-6">
          <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-3">
            <span className="text-yellow-400 font-bold text-lg">T₹</span>
          </div>
          <h1 className="text-xl font-semibold text-slate-800">
            <span className="text-slate-800">Times</span>
            <span className="text-green-600">Money</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">Content Management System</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-8 text-left">
          <h2 className="text-lg font-semibold text-center text-slate-800">Login</h2>
          <p className="text-sm text-slate-500 text-center mt-1 mb-6">
            Enter your credentials to manage website content
          </p>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-500 text-xs px-3 py-2.5 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm text-slate-700 block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@timesmoney.in"
                required
                className="w-full px-3 py-2.5 text-sm bg-slate-100 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-700 block mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3 py-2.5 text-sm bg-slate-100 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg text-sm font-medium transition disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Login'}
            </button>
          </form>
        </div>

        <p className="text-xs text-slate-500 mt-4">TimesMoney v1.0</p>
      </div>
    </div>
  );
}