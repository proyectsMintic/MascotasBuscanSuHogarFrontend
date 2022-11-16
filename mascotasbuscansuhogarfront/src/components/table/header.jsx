function Header(props) {
    //props.columns={props.columnsAlias}
    //props.tools={props.tools}
    let toolHeader = undefined;
    if (props.tools && props.tools.length > 0) {
        toolHeader = <th scope="col">  </th>;
    }
    return (
        <thead>
                        <tr>
                            {
                                props.columns.map(function(value,index){
                                    <th>{value}</th>
                                })  
                            }
                            {toolHeader}
                        </tr>
                    </thead>
    );
}

export default Header;