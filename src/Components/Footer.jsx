import style from '../modules/footer.module.css';

function Footer({completed, total}){

    return (
        <>
            <div className={style.footer} >
                <span>
                    Completed Todos : {completed}
                </span>
                <span>
                   Total : {total}
                </span>
            </div>
        </>
    );
}

export default Footer;