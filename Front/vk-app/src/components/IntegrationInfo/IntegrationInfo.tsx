

import './IntegrationInfo.css'

interface IntegrationInfoProps {
    integrated: boolean;
    email: string;
    onClickIntegration: (needIntegration: boolean) => void;
}

export const IntegrationInfo = (props: IntegrationInfoProps) => {
    return <div className={`integration-info ${props.integrated ? 'integration-info__enabled' : 'integration-info__disabled'}`}>
        {props.integrated ?
            <>
                <span>{`Интегрировано ${props.email}, `}</span>
                <span className="integration-info__action" onClick={() => props.onClickIntegration(false)}>отменить</span>
            </> :
            <>
                <span>{`Не интегрировано, `}</span>
                <span className="integration-info__action" onClick={() => props.onClickIntegration(true)}>интегрироваться</span>
            </>
        }
    </div>
}