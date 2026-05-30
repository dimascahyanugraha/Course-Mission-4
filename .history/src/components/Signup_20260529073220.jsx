import logoVideoBelajar from "../assets/logo_video_belajar.png";

export default function Signup() {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="bg-white p-4">
        <img src={logoVideoBelajar} alt="logo" />
      </header>

      {/* MAIN CONTENT */}
      <main className="p-8">
        <h2>Pendaftaran Akun</h2>
        <p>Yuk, daftarkan akunmu sekarang juga!</p>
      </main>
    </div>
  );
}
