import { useState } from "react";
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
          <form action="">
            <label htmlFor="">Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama lengkap" />
          </form>
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="">E-Mail</label>
          <input type="text" />
        </div>
      </main>
    </>
  );
}
