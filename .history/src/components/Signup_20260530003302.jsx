import logoVideoBelajar from "../assets/logo_video_belajar.png";
import indonesia from "../assets/indonesia.png";

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#f6f2e9] flex flex-col">
      <header className="bg-white py-2 px-4 shadow-sm">
        <img src={logoVideoBelajar} alt="logo" />
      </header>

      <main className="flex flex-auto justify-center items-center px-4">
        <div className="bg-white w-full max-w-md rounded-md shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Pendaftaran Akun
          </h2>
          <p className="text-gray-500 text-sm text-center mt-2">
            Yuk, buat akunmu dan lanjutkan belajarmu di videobelajar.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-400">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="name"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-md text-gray-400">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="mg-1 w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
              />
            </div>
            {/* NO. HP */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                No. Hp <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex rounded-md border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-green-500">
                <div className="flex items-center gap-1 px-2 bg-white border-r border-gray-300">
                  <img
                    src={indonesia}
                    alt="flag ID"
                    className="w-6 h-4 rounded-sm object-cover"
                  />
                  <select className="text-sm text-gray-700 focus:outline-none bg-transparent cursor-pointer pr-1">
                    <option value="+62">+62</option>
                    <option value="+18">+18</option>
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="8xx xxxx xxxx"
                  className="flex-1 px-3 py-2 text-sm text-gray-700 focus:outline-none"
                />
              </div>
            </div>{" "}
            {/* ← div No.Hp ditutup di sini */}
            <div>
              <label className="block text-gray-400 text-md ">
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full mt-1 text-sm border border-gray-300 px-3 py-2 focus:outline-none rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label>Konfirmasi Kata Sandi</label>
              <input
                type="password"
                className="w-full mt-1 text-sm border rounded-md border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex justify-end text-sm text-gray-500">
              <a href="#" className="text-xs text-gray-500 hover:underline">
                Lupa Password?
              </a>
            </div>
            <button className="w-full bg-green-400 text-white font-semibold py-2 rounded-lg hover:bg-green-200 transition">
              Daftar
            </button>
            <button className="bg-green-100 w-full py-2 text-green-500 font-semibold rounded-lg hover:bg-green-200 transition">
              Masuk
            </button>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <hr className="flex-1 border-gray-200" />
              atau
              <hr className="flex-1 border-gray-200" />
            </div>
            {/* GOOGLE SIGN IN */}
            <button className="w-full bg-white text-gray-700 font-semibold py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="inline w-5"
              />
              Masuk dengan Google
            </button>
            {/* ← form ditutup setelah semua input */}
          </form>{" "}
        </div>
      </main>
    </div>
  );
}
