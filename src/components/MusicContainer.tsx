import MusicCard from "./MusicCard";

export default function MusicContainer(){
    return(
        <div className="flex flex-row justify-center gap-2">
            <MusicCard imgName="/interests_img/danielcaesar.png"/>
            <MusicCard imgName="/interests_img/w2e.png"/>
            <MusicCard imgName="/interests_img/rexoc.png"/>
            <MusicCard imgName="/interests_img/frankocean.png"/>
            <MusicCard imgName="/interests_img/kendricklamar.png"/>
            <MusicCard imgName="/interests_img/kanyewest.png"/>
        </div>
    );
}