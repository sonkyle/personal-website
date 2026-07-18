import ProjectsContainer from "../components/ProjectsContainer";

export default function ProjectsPage() {
    return (
        <div className="flex flex-row items-center min-h-screen w-full bg-[#111827] pb-30 pt-30">
            <p className="ml-25 text-white font-bold text-5xl">My Projects: </p>
            <ProjectsContainer/>
        </div>
    )
}