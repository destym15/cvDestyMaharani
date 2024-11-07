import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./dsy-style.css";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import Skills from "./components/skills";
import PersonalInfo from "./components/myinfo";
import Hobbies from "./components/hobby";
import Rating from "./components/contact";

export default function CVOnline () {
  return (
    <section>
      <Hero />
      <PersonalInfo/>
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills/>
      <Hobbies/>
      <Rating/>
    </section>
  )
}