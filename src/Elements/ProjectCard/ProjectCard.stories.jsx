import { ProjectCard } from "./ProjectCard";
import { TestProject } from "../../static/project/test";

export default {
    title: 'ProjectCard',
    component: ProjectCard,
};

export const StoryProjectCard = () => {

    return (
        <ProjectCard props={TestProject}/>
    )
}