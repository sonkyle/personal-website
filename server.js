import dotenv from "dotenv";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { builtinModules } from "module";

dotenv.config();
const app = express();

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const REGION = "na1";
const PUUID =
  "HfAbyhL7SHm5clayOBrDsCtzZyrygkKpW1BJ5uCTzDpdf50yukGUutvj2UrMjvQ6mQcsEAsJnvn3OQ";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));

app.get("/rank-data", async (_req, res) => {
  try {
    const resp = await fetch(
      `https://${REGION}.api.riotgames.com/tft/league/v1/by-puuid/${PUUID}?api_key=${RIOT_API_KEY}`
    );
    if (!resp.ok) throw new Error(`Riot API error: ${resp.status}`);
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load rank" });
  }
});

const PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, () => console.log(`TFT backend running on port ${PORT}`));
} catch (err) {
  console.error("Server failed to start:", err);
}

