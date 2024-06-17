import "./App.css";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./apps/BaseRoute";
import Sentiment from "sentiment";

function App() {
  const sentiment = new Sentiment();
  const teks = "Saya sangat senang hari ini!";
  const hasilAnalisis = sentiment.analyze(teks);
  console.log("Teks:", teks);
  console.log("Skor:", hasilAnalisis.score);
  console.log(
    "Klasifikasi:",
    hasilAnalisis.score > 0
      ? "Positive"
      : hasilAnalisis.score < 0
      ? "Negative"
      : "Netral"
  );

  return (
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
