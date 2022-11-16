import Row from "./row";
import prueba from "../../img/01.jfif";

function Body(props) {
    // props.data -> arreglo
    // props.data[0]
    //props.path
    return (
        <tbody>
            {props.data.map(function (value, index) {
                return (
                    <Row
                        path={props.path}
                        rowData={value}
                        columns={props.comlunns}
                        tools={props.tools}
                    />
                );
            })}
            
        </tbody>
    );
}

export default Body;
