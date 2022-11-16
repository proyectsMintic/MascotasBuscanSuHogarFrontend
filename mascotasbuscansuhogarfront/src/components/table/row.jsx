import Cell from "./cell";
import Tools from "./tool";
function Row(props) {
    //props.rowData={value}
    //props.columns={props.columns}
    //props.tools={props.tools}
    //props.path
    
    return (
        <tr>
            
                <Cell value={props.rowData} path={props.path}/>
        </tr>
        
    );
}

export default Row;