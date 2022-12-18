import { ProjectsList } from "./ProjectsList";
import {ProjectsListData} from "../../static/project/ProjectsList";

export default {
    title: 'ProjectsList',
    component: ProjectsList,
};

export const StoryProjectsList = () => {
    return (
        <>
            <ProjectsList projects={ProjectsListData}/>
        </>
    )
}
