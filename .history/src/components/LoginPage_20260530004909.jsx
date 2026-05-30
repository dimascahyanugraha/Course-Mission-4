import { useState } from "react";
import logoVideoBelajar from "../assets/logo_video_belajar.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f2e9] flex flex-col">
      {/* HEADER */}
      <header className="bg-white py-2 px-8 shadow-sm">
        <img src={logoVideoBelajar} alt="logo-video-belajar" />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex flex-auto justify-center items-center px-4">
        <div className="bg-white w-full max-w-md rounded-md shadow-md p-8">
          {/* TITLE */}
          <h2 className="text-xl font-bold text-gray-800 text-center">
            Masuk ke Akun
          </h2>

          <p className="text-gray-500 text-sm text-center mt-2">
            Yuk, lanjutkan belajarmu di videobelajar.
          </p>

          {/* FORM */}
          <form className="mt-6 space-y-4">
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-Mail <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Masukkan email"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kata Sandi <span className="text-red-500">*</span>
              </label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="flex justify-end mt-2">
                <a href="#" className="text-xs text-gray-500 hover:underline">
                  Lupa Password?
                </a>
              </div>
            </div>

            {/* BUTTON MASUK */}
            <button
              type="submit"
              onClick={() => navigate("/homepage")}
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
            >
              Masuk
            </button>

            {/* BUTTON DAFTAR */}

            <button
              type="button"
              onClick={() => navigate("/signup")} // ← tambah ini
              className="w-full bg-green-100 text-green-700 font-semibold py-2 rounded-md hover:bg-green-200 transition"
            >
              Daftar
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <hr className="flex-1 border-gray-200" />
              atau
              <hr className="flex-1 border-gray-200" />
            </div>

            {/* GOOGLE LOGIN */}
            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 font-medium py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Masuk dengan Google
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
