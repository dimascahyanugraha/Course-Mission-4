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
        </div>
      </main>
    </>
  );
}
