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
            <div>
              <img src={indonesia.png} alt="" />
              <label>No.Hp</label>
              <input type="text" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
