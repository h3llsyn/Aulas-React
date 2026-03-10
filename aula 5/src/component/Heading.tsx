import styles from './Heading.module.css'
type HeadingProps ={
    children: React.ReactNode;
}
export function Heading({children}:HeadingProps){
    const nome = "Abu";
    const n1:number = 10;
    const n2:number = 20;
    function soma(n1:number,n2:number){
        return n1+n2;
    }
    return(
        <>
            <h1 className={`${styles.heading} ${styles.cyan}`}>{children}</h1>
            <p className={`${styles.heading} ${styles.cyan}`}>{children}{`Olá ${nome}`}</p>
            <p className={styles.verde}>{`A soma de ${n1}+${n2} = ${soma(n1,n2)}`}</p>
        </>
    )
}