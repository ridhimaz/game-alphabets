import "../components/stylesKey.css"
import useSound from 'use-sound';


export default function Key({ setSelectedgif,obj,border,setBorder,index}) {

  const [play] = useSound(obj.sound);

  function handleClick() {
    setSelectedgif(obj.gif);
    setBorder(index);
    play();

  }
  return (
    <>
      <button className='alphabet-key' onClick={handleClick} style={{ color: obj.color, border: `5px solid ${
          border? "cyan" : "gold"
        }`
      }} value={obj.key}>
        {obj.key}
      </button>
    </>
  )
}
