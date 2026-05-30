import logoVideoBelajar from "../assets/logo_video_belajar.png";

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
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama lengkap" />
          </form>
        </div>

        <div>
          <label>E-Mail</label>
          <input type="text" />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
          <img src={indonesiaFlag} alt="Indonesia" className="w-6 h-4 mr-2" />

          <select className="outline-none bg-transparent">
            <option>+62</option>
          </select>
        </div>
      </main>
    </>
  );
}
