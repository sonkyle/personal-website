export default function MusicCard({imgName}:{imgName : string}){
    return(
        <img className="w-30 h-30 object-cover" src={imgName} alt="Musical Artist Picture" />
    );
}