import { Popover } from "./Popover";
import {Button} from "../Button";
import {useState} from "react";

export default {
    title: 'Popover',
    component: Popover,
};

export const StoryPopover = () => {
    const [modalActive, setModalActive] = useState(false);

    return <>
        <Button type="dark" onClick={() => setModalActive(true)}>Форма обратной связи</Button>
        <Popover active={modalActive} setActive={setModalActive}/>
    </>
}

