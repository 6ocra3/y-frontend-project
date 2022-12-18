import { ProjectsList } from "./ProjectsList";
import {MakarProjects} from "../../static/project/MakarProjects";
import {GrigoriyProjects} from "../../static/project/GrigoriyProjects";

export default {
    title: 'ProjectsList',
    component: ProjectsList,
};

export const StoryProjectsList = () => {
    return (
        <>
            <ProjectsList projects={[...MakarProjects, ...GrigoriyProjects]}/>
        </>
    )
}
