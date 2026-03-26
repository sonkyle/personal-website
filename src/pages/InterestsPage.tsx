import InterestsContainer from "../components/InterestsContainer"

export default function InterestsPage(){
    return(
        <div className="flex flex-row items-center bg-[#111827] pb-30 pt-30">
            <p className="ml-25 text-white font-bold text-5xl">My Interests:</p>
            <InterestsContainer/>
        </div>
    )
}