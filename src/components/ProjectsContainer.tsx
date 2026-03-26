import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {
    return(
        <div className="grid grid-cols-2 gap-5 mx-auto">
            <ProjectCard imgName="/project_img/playericon.png" title="PlayerIcon" description="Full stack community statistics app for VALORANT esports with over 900 unique user submissions" stack1="/tech_stack_img/javascript.png" stack2="/tech_stack_img/tailwindcss.png" stack3="/tech_stack_img/supabase.png"/>
            <ProjectCard imgName="/project_img/locus.png" title="LocusAI" description="Heatmap of greater Los Angeles area displaying regions with suitable housing given user filters using real data" stack1="/tech_stack_img/react.png" stack2="/tech_stack_img/typescript.png" stack3="/tech_stack_img/tailwindcss.png" stack4="/tech_stack_img/groq.png" stack5="/tech_stack_img/mapbox.png" />
            <ProjectCard imgName="/project_img/portfolio.png" title="Developer Portfolio" description="The website you're on right now!" stack1="/tech_stack_img/react.png" stack2="/tech_stack_img/typescript.png" stack3="/tech_stack_img/tailwindcss.png" stack4="/tech_stack_img/riot.png"/>
            <ProjectCard imgName="/project_img/uci.png" title="UCI Research" description="Developing an automated NLP pipeline to help both professors to strengthen their lectures and low-vision students' comprehension" stack1="/tech_stack_img/python.png"/>
        </div>
    )
}