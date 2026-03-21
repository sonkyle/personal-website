import TechStackBox from '../../components/TechStackBox';
import './TechStackPage.css'

const proficientImages = [
    'Java', 'HTML', 'CSS', 'C', 'git'
];
const moderateImages = [
    'JavaScript', 'TypeScript', 'Python', 'PostgreSQL', 'MySQL'
]
const newImages = [
    'mongoDB', 'React', 'R', 'Node.js', 'TailwindCSS', 'Next.js', 'Flask'
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
        <div id='start-tech' className='flex flex-col items-center font-bold gap-2'>
                <h2 className='text-3xl'>Proficient</h2>
            <div className='flex flex-row gap-5'>
                {listProBoxes}
            </div>
                <h2 className='text-3xl'>Intermediate</h2>
            <div className='flex flex-row gap-5'>
                {listModBoxes}
            </div>
                <h2 className='text-3xl'>Learning</h2>
            <div className='flex flex-row gap-5'>
                {listNewBoxes}
            </div>
        </div>
    );
}