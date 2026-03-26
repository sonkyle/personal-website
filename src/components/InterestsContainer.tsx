import MusicContainer from "./MusicContainer";
import RankContainer from "./RanksContainer";
import HobbiesContainer from "./HobbiesContainer";

export default function InterestsContainer() {
    return (
        <div className="mx-auto flex flex-col gap-5">
            <RankContainer/>
            <MusicContainer/>
            <HobbiesContainer/>
        </div>
    );
}