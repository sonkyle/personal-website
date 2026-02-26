document.getElementById('scroll-btn').addEventListener('click', function() {
  window.scrollBy({
    top:911,
    behavior: 'smooth'
  });
});

async function loadTftRank() {
  try {
    const response = await fetch("/api/rank-data");
    const data = await response.json();

    if (!data.length) {
      document.getElementById("tier").textContent = "No ranked data";
      return;
    }

    const rank = data.find((queue) => queue.queueType === "RANKED_TFT",);
    const tier = rank.tier.toLowerCase() + " rank icon";
    const iconUrl = `img/tft_icons/${tier}.png`;
    document.getElementById("tft-tier").textContent = `${rank.tier} ${rank.rank}`;
    document.getElementById("tft-lp").textContent = `${rank.leaguePoints} LP`;
    document.getElementById("tft-rank-icon").src = iconUrl;
  } catch (err) {
    console.error(err);
    document.getElementById("tft-tier").textContent = "Failed to load rank";
  }
}

loadTftRank();