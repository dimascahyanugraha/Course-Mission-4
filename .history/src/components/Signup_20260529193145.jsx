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
              <label className="block text-sm font-medium text-gray-400">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="name"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-md font-medium text-gray-400">
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
              <label className="block">Kata Sandi</label>
              <input type="password" placeholder="Masukkan password" />
            </div>
            <div>
              <label>Konfirmasi Kata Sandi</label>
              <input
                type="password"
                placeholder="Masukkan konfirmasi password"
              />
            </div>
            <div>
              <a href="#">Lupa Password?</a>
            </div>
          </form>{" "}
          {/* ← form ditutup setelah semua input */}
        </div>
        <button>Daftar</button>
        <button>Masuk</button>
        <div>
          <hr className="flex-1 border-gray-200" />
          atau
          <hr className="flex-1 border-gray-200" />
        </div>
        {/* GOOGLE SIGN IN */}
        <button>Masuk dengan Google</button>
      </main>
    </div>
  );
}
