export default function HobbiesCard({imgName}:{imgName : string}) {
    return(
        <div>
            <img className="w-30 h-30 object-cover" src={imgName} alt="Hobby Card" />
        </div>
    );
}