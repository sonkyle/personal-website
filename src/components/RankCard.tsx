export default function RankBox({gameTitle, imgName, rank, mmr, peakImg, peakR, moveDown = false} : {gameTitle : string, imgName : string, rank : string, mmr : string, peakImg : string, peakR : string, moveDown? : boolean}){
    return (
        <div className="w-[155px] h-[205px] text-[#111827] border-[2px] border-solid border-[#72a9fc] flex flex-col items-center 
                        bg-[#a4c7fc] rounded-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.2)] font-bold">
            <div className="text-center">{gameTitle}</div>
            <img className="w-25" src={imgName} alt="Rank Icon" />
            <div id="tft-tier">{rank}</div>
            <div id="tft-lp">{mmr}</div>
            <div className="flex flex-row text-[10px]" id="tft-peak">
              <div className="transform translate-y-1" id="tft-peak-text">PEAK:</div>
              <img
                id="tft-peak-rank-icon"
                className="w-[25px]"
                src={peakImg}
                alt="Rank Icon"
              />
              <div className={`text-center ${moveDown ? "transform translate-y-1" : ""}`} id="tft-peak-text">{peakR}</div>

            </div>
        </div>
    );
}