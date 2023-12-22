import React, {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";


const Component = () => {
    const {t, i18n} = useTranslation()
    const toggle = () => {
        return i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (

        <div>
            <button onClick={toggle}>{t('Перевод')}</button>
            {t('Тестовый пример')}
        </div>
    )
}


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <Component/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
