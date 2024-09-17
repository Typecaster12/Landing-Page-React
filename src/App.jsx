import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero"
const App = () => {
  //we have three pictures and evry picture will have different text on it;
  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" }
  ];

  //state that tracks the current bgc at hero;
  const [heroCount, setHeroCount] = useState(2);

  //state that tracks if the bgc vdo is paused or play;
  const [playStatus, setPlayStatus] = useState(false);


  //for background to change in every 3 seconds;
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 4000);
  }, [])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
      />

    </div>
  )
}

export default App;
