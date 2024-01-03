import "./stylesDisplay.css";
import Image from 'react-bootstrap/Image';


export default function Display({ gif }) {
   
    return (
        <>
            {
                gif ? (
                    <div className='card1' key={gif}>
                        <Image src={gif} id="gif" alt="gif" fluid/>
                    </div>

                ) : (
                    <div className="nogif">Pick an alphabet</div>
                )
            }

        </>
    )
}
