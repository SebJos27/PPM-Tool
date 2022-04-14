import { useParams } from "react-router-dom";

export const withParam = (Component) => {
    const Wrapper = (props) => {
        const { id } = useParams();

        return <Component id={id} {...props} />;
    };
    return Wrapper;
};