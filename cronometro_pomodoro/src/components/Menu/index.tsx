import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import {useEffect, useState} from 'react';
type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme,setTheme]=useState<AvaliableThemes>('dark');
    function handleThemeChange(event:React.MouseEvent<HTMLAnchorElement,MouseEvent>){
        event.preventDefault();
        setTheme(prevTheme=>{
            const nextTheme = prevTheme === 'dark'?'light':'dark';
        })
    }
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
        return()=>{
            console.log('O componente está atualizado', Date.now())
        };
    },[theme]);
    return (
        <>
            <nav className={styles.menu}>
                <h1>{theme}</h1>
                <a className={styles.menuLink} href="#"><HistoryIcon/></a>
                <a className={styles.menuLink} href="#"><HouseIcon/></a>
                <a className={styles.menuLink} href="#"><SettingsIcon/></a>
                <a className={styles.menuLink} href="#"
                aria-label = "Mudar tema"
                onClick={handleThemeChange}
                ><SunIcon/></a>
            </nav>
        </>
    )
}