export default function RankBox({gameTitle, imgName, rank, mmr, peakImg, peakR} : {gameTitle : string, imgName : string, rank : string, mmr : string, peakImg : string, peakR : string}){
    return (
        <div>
            <div className="w-[155px] h-[205px] text-[#111827] border-[2px] border-solid border-[#72a9fc] bg-[#a4c7fc] rounded-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                {gameTitle}
            </div>
            <img className="w-25" src={imgName} alt="Rank Icon" />
            <div id="tft-tier">{rank}</div>
            <div id="tft-lp">{mmr}</div>
            <div id="tft-peak">
              <div id="tft-peak-text">PEAK:</div>
              <img
                id="tft-peak-rank-icon"
                src={peakImg}
                alt="Rank Icon"
              />
              <div id="tft-peak-text">{peakR}</div>
            </div>
        </div>
    );
}