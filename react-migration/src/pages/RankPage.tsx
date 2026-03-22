import RankBox from '../components/RankBox.tsx';

export default function RankPage(){
    return (
        <div className="bg-[#111827] flex flex-row justify-center gap-5 pb-10">
            <RankBox gameTitle="Teamfight Tactics" imgName="../../public/rank_img/master-tft.png" rank="Master" mmr="70 LP" peakImg="../../public/rank_img/master-tft.png" peakR="Master 137 LP" moveDown/>
            <RankBox gameTitle="VALORANT" imgName="../../public/rank_img/platinum3-val.png" rank="Platinum 3" mmr="50 RR" peakImg="../../public/rank_img/ascendant2-val.png" peakR="Ascendant II 23 RR" moveDown/>
            <RankBox gameTitle="Rocket League" imgName="../../public/rank_img/c2-rl.png" rank="Champion II" mmr="1201 MMR" peakImg="../../public/rank_img/gc2-rl.png" peakR="Grand Champion II 1630 MMR"/>
        </div>
    );
}