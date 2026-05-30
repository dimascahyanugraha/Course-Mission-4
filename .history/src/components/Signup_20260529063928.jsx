import { useState } from "react";
import logoVideoBelajar from "../assets/logo_video_belajar.png";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <header>
      <img src={logoVideoBelajar} alt="logo" />
    </header>
  );
}
