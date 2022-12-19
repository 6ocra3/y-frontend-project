import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import s from './Layout.module.scss';

export const Layout = ({theme, children}) => {
    return (
        <div className={theme == 'light' ? s.layout + ' ' + s.layout_light : s.layout}>
            <Header theme={theme}/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
