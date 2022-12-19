
import s from './Layout.module.scss';
import {Header} from "../Header";
import {Footer} from "../Footer";

export const Layout = ({theme, children}) => {
    return (
        <div className={theme == 'light' ? s.layout + ' ' + s.layout_light : s.layout}>
            <Header theme={theme}/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
