export default function ProjectCard({imgName, title, description, stack1, stack2, stack3, stack4, stack5} : {imgName : string, title : string, description: string, stack1 : string, stack2? : string, stack3? : string, stack4? : string, stack5? : string}) {
    return (
        <div className="w-125 h-75 rounded-lg overflow-hidden flex flex-col border-[2px] border-[#1e3a5f] text-white">
            <div className="w-125 h-48 flex-shrink-0 overflow-hidden">
                <img className="w-full h-full object-cover" src={imgName} alt="Project Image" />
            </div>
            <div className="flex-1 bg-[#1e3a5f] p-3">
                <div className="flex flex-row justify-between items-center pb-2">
                    <h1 className="font-bold text-white text-xl">{title}</h1>
                    <div className="flex flex-row gap-1">
                        <img className="w-7 h-7 object-contain" src={stack1} alt="Stack Icon" />
                        {stack2 && <img className="w-7 h-7 object-contain" src={stack2} alt="Stack Icon" />}
                        {stack3 && <img className="w-7 h-7 object-contain" src={stack3} alt="Stack Icon" />}
                        {stack4 && <img className="w-7 h-7 object-contain" src={stack4} alt="Stack Icon" />}
                        {stack5 && <img className="w-7 h-7 object-contain" src={stack5} alt="Stack Icon" />}
                    </div>
                </div>
                <p className="italic">{description}</p>
            </div>
        </div>
    );
}