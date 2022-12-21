
import s from './Layout.module.scss';
import {Header} from "../Header";
import {Footer} from "../Footer";

export const Layout = ({theme, setTheme, children}) => {
    return (
        <div className={theme == 'light' ? s.layout + ' ' + s.layout_light : s.layout}>
            <Header theme={theme} setTheme={setTheme}/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
