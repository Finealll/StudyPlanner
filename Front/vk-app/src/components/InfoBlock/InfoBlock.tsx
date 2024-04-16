
// @ts-ignore
import rabbit from '../../assets/icons/rabbit.svg';
import './InfoBlock.css';

interface InfoBlockProps {
    message: string;
}

export const InfoBlock = ({ message }: InfoBlockProps) => {
    return <>
        <div className="info-block">
            <img className={"info-block-img"} src={rabbit} alt="Love" />
            <div className="info-block-title">{message}</div>
        </div>
    </>
}