import styles from '../home/Index.module.scss';
import HomeContentCard from './homeComponents/HomeContentCard';
import HomeContentFiltr from './homeComponents/HomeContentFiltr';
import imgSort from './homeComponents/images/3.svg';
import imgSortBtn from './homeComponents/images/4.svg';
import imgSortBtn2 from './homeComponents/images/5.svg';
function Home() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.home}>
        <div className={styles.homeMenuConteiner}>
          <button className={styles.homeMenuTitle}>
            <div className={styles.homeMenuTitleBtn}>&#8592;</div>
            <p className={styles.homeMenuTitleP}>Опоры трубопроводов</p>
          </button>
          <div className={styles.homeMenuTitleSort}>
            <button className={styles.homeMenuTitleSortBtn}>
              <p className={styles.homeMenuTitleSortP}>Сначала популярные</p>
              <img className={styles.homeMenuTitleSortImg} src={imgSort} alt="" />
            </button>
            <div className={styles.homeMenuTitleSortBtnConteiner}>
              <button className={styles.homeMenuTitleSortImgB}>
                <img src={imgSortBtn} alt="" />
              </button>
              <button className={styles.homeMenuTitleSortImgS}>
                <img src={imgSortBtn2} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.homeContentConteiner}>
            <HomeContentFiltr />
            <HomeContentCard />
          </div>
        </div>
        <div className={styles.homeFooter}>
          <div className={styles.homeFooterFilter}></div>
          <div className={styles.homeFooterText}>
            <p className={styles.homeFooterTextTitleP}>
              Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1
            </p>
            <p className={styles.homeFooterTextP}>
              Надежность работы трубопровода в значительной мере зависит от правильности и прочности
              его крепления. Основные средства крепления трубопроводов — это опора, подвеска,
              кронштейны, скобы и другие части опорных конструкций. <br />
              Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим
              нормативным документам, а также изготовим любые нестандартные опоры трубопроводов по
              чертежам заказчика.
            </p>
            <p className={styles.homeFooterTextP}>
              Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и
              вертикальных участков трубопровода. Основным материалом деталей является сталь
              17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и пр.
            </p>
            <p className={styles.homeFooterTextP}>
              Марка стали выбирается исходя от параметров окружающей среды, опоры могут
              использоваться при температуре от -60°C. Конструкции опор, представленные на сайте,
              отличаются между собой методом крепления с трубопроводом и несущей способностью.
            </p>
            <p className={styles.homeFooterTextP}>
              Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные швы
              отвечают требованиям СНиП III-18-75, СНиП II-23-81. Резьбовые части опор
              обрабатываются антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.
            </p>
            <button className={styles.homeFooterTextBtn}>Скрыть описание</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
