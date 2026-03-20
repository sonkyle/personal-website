export default function TechStackBox({imgName, text} : {imgName : string, text: string}) {
    return (
        <div className='flex flex-col items-center text-lg'>
            <img className="w-32 h-32 object-contain" src={imgName} alt={text} />
            <p>{text}</p>
        </div>
    )
}