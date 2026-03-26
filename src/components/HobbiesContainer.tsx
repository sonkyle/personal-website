import HobbiesCard from "./HobbiesCard";

export default function HobbiesContainer() {
    return(
        <div className="flex flex-row justify-center gap-2">
            <HobbiesCard imgName="/interests_img/dumbbell.png"/>
            <HobbiesCard imgName="/interests_img/pingpong.png"/>
            <HobbiesCard imgName="/interests_img/vct.png"/>
        </div>
    );
}