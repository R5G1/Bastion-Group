import style from '../main/index.module.scss';
function Main() {
  const nameDate: any = [
    { name: 'Portrait', number: '' },
    { name: 'Landscape', number: '' },
    { name: 'Still life', number: '' },
    { name: 'Impressionism', number: '' },
    { name: 'Expressionism', number: '' },
    { name: 'Avant-garde', number: '' },
    { name: 'Renaissance', number: '' },
    { name: 'Surrealism', number: '' },
    { name: 'Kitsch', number: '' },
    { name: 'Minimalism', number: '' },
    { name: 'Interior', number: '' },
    { name: 'Nude', number: '' },
  ];

  function randomInteger(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function btnClick(name: any) {
    console.log(name);
  }

  function CreateImg(): any {
    const itemLenth = nameDate.length;
    const listItems: any = nameDate.map((item: any, index: number) => (
      <div
        className={style.mainConent}
        key={Math.random().toString()}
        onClick={() => btnClick(item.name)}
      >
        <div className={style.mainConentName}>{item.name}</div>
        <div
          className={style.mainConentBg}
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/R5G1/image-data/master/img/${
              index + itemLenth
            }.jpg)`,
          }}
        ></div>
      </div>
    ));
    return <div className={style.mainConteiner}>{listItems}</div>;
  }
  return (
    <div className={style.main}>
      <CreateImg />
    </div>
  );
}

export default Main;
