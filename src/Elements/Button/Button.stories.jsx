import { Button } from "./Button";
export default {
    title: 'Button',
    component: Button,
};
export const StoryButton = () => {
    return (
        <>
            <Button type={"dark"}>Один вид кнопки</Button>
            <br />
            <br />
            <Button type={"bright"}>Другой вид кнопки</Button>
            <br />
            <br />
            <Button type={"ghost"}>Другой вид кнопки</Button>
        </>
    )
}
