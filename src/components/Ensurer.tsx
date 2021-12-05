import {Editor} from "../containers/Editor";
import {Loader} from "./styled/Loader";

interface IEnsurerProps{
    isDataLoaded: boolean
}


export const Ensurer: React.FC<IEnsurerProps> = ({isDataLoaded}) => {
    if(!isDataLoaded){
        return (<Loader />);
    }

    return (<Editor />)
}