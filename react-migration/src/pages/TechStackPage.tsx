import TechStackBox from '../components/TechStackBox';

const proficientImages = [
    'Java', 'HTML', 'CSS', 'C', 'git'
];
const moderateImages = [
    'JavaScript', 'TypeScript', 'Python', 'PostgreSQL', 'MySQL'
]
const newImages = [
    'mongoDB', 'React', 'Node.js', 'TailwindCSS', 'Next.js', 'Flask'
]


export default function TechStackPage() {
    const listProBoxes = proficientImages.map(image =>
        <TechStackBox imgName={`/tech_stack_img/${image.toLowerCase().replace(/\./g, '')}.png`} text={image}/>
    );
    const listModBoxes = moderateImages.map(image =>
        <TechStackBox imgName={`/tech_stack_img/${image.toLowerCase().replace(/\./g, '')}.png`} text={image}/>
    );
    const listNewBoxes = newImages.map(image =>
        <TechStackBox imgName={`/tech_stack_img/${image.toLowerCase().replace(/\./g, '')}.png`} text={image}/>
    );
    return (
        <div className='flex flex-row items-center bg-[#111827] text-white'>
            <p className='ml-30 font-bold text-5xl'>My Stack:</p>
            <div id='start-tech' className='flex flex-col items-center mx-auto font-bold gap-2 pt-5 pb-20'>
                <h2 className='text-2xl underline'>Proficient</h2>
                <div className='flex flex-row gap-5'>
                    {listProBoxes}
                </div>
                <h2 className='text-2xl underline'>Intermediate</h2>
                <div className='flex flex-row gap-5'>
                    {listModBoxes}
                </div>
                <h2 className='text-2xl underline'>Learning</h2>
                <div className='flex flex-row gap-5'>
                    {listNewBoxes}
                </div>
            </div>
        </div>
    );
}