import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const PUUID = 'HfAbyhL7SHm5clayOBrDsCtzZyrygkKpW1BJ5uCTzDpdf50yukGUutvj2UrMjvQ6mQcsEAsJnvn3OQ';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'rank-api',
        configureServer(server) {
          server.middlewares.use('/api/rank-data', async (_req, res) => {
            try {
              const resp = await fetch(
                `https://na1.api.riotgames.com/tft/league/v1/by-puuid/${PUUID}?api_key=${env.RIOT_API_KEY}`
              );
              if (!resp.ok) throw new Error(`Riot API error: ${resp.status}`);
              const data = await resp.json();
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            } catch (err) {
              console.error(err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to load rank' }));
            }
          });
        },
      },
    ],
  };
});
