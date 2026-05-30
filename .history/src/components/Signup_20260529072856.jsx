import { useState } from "react";
import logoVideoBelajar from "../assets/logo_video_belajar.png";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

    return (
    //   HEADER
    <header>
      <img src={logoVideoBelajar} alt="logo" />
        </header>
        
        // MAIN CONTENT
        <main>
                <h2>Pendaftaran Akun</h2>
        </main>
        <p>Yuk,daftarkan akunmu sekarang juga!</p>

        // FORM
        
  );
}
