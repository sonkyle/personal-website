import type { VercelRequest, VercelResponse } from '@vercel/node';

const PUUID = 'HfAbyhL7SHm5clayOBrDsCtzZyrygkKpW1BJ5uCTzDpdf50yukGUutvj2UrMjvQ6mQcsEAsJnvn3OQ';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const resp = await fetch(
      `https://na1.api.riotgames.com/tft/league/v1/by-puuid/${PUUID}?api_key=${process.env.RIOT_API_KEY}`
    );
    if (!resp.ok) throw new Error(`Riot API error: ${resp.status}`);
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load rank' });
  }
}
