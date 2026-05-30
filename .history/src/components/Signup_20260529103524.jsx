import logoVideoBelajar from "../assets/logo_video_belajar.png";
import indonesia from "../assets/indonesia.png";

export default function Signup() {
  return (
    <>
      <header>
        <img src={logoVideoBelajar} alt="logo" />
      </header>

      <main>
        <div>
          <h2>Daftar Akun</h2>
          <p>Yuk, buat akunmu dan lanjutkan belajarmu di videobelajar.</p>
          <form>
            <div>
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama lengkap" />
            </div>
            <div>
              <label>E-Mail</label>
              <input type="email" placeholder="Masukkan email" />
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
              <label>Kata Sandi</label>
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
      </main>
    </>
  );
}
