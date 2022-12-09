import { Button } from "./Button";
import s from "./Button.module.scss"
export default {
    title: 'Button',
    component: Button,
};
export const StoryButton = () => {
    return (
        <>
            <Button type={s.darkBlue}>Один вид кнопки</Button>
            <br />
            <br />
            <Button type={s.brightBlue}>Другой вид кнопки</Button>
        </>
    )
}
