import { useState, useEffect } from 'react';
import RankBox from '../components/RankBox.tsx';

interface TftEntry {
    queueType:string;
    tier: string;
    rank: string;
    leaguePoints: number;
}

export default function RankPage(){
    const [tftRank, setTftRank] = useState<TftEntry | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/api/rank-data')
        .then(res => res.json())
        .then((data: TftEntry[]) => {
            const entry = data.find(q => q.queueType === 'RANKED_TFT');
            if(entry) setTftRank(entry);
        })
        .catch(() => setError(true));
    }, []);

    const tftImgName = tftRank ? `/rank_img/${tftRank.tier.toLowerCase()}-tft.png`
    : '/rank_img/challenger-tft.png';

    const tftRankText = error ? 'Failed to load' : 
                        tftRank ? `${tftRank.tier} ${tftRank.rank}` : 'Loading...';

    const tftLp = tftRank ? `${tftRank.leaguePoints} LP` : '';

    return (
        <div className="bg-[#111827] flex flex-row justify-center gap-5 pb-10">
            <RankBox gameTitle="Teamfight Tactics" imgName={tftImgName} rank={tftRankText} mmr={tftLp} peakImg="/rank_img/master-tft.png" peakR="Master 137 LP" moveDown/>
            <RankBox gameTitle="VALORANT" imgName="/rank_img/platinum3-val.png" rank="Platinum 3" mmr="50 RR" peakImg="/rank_img/ascendant2-val.png" peakR="Ascendant II 23 RR" moveDown/>
            <RankBox gameTitle="Rocket League" imgName="/rank_img/c2-rl.png" rank="Champion II" mmr="1201 MMR" peakImg="/rank_img/gc2-rl.png" peakR="Grand Champion II 1630 MMR"/>
        </div>
    );
}