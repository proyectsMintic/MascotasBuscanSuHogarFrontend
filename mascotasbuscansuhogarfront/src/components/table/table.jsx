import Header from "./header";
import Body from "./body";

function Table(props) {
    //props.data={datosTabla}
    //props.name={"Tabla de Usuarios"}
    //props.columns={["id", "firstName", "email", "username", "password"]}
    //props.columnsAlias={[]}
    //props.tools={["update", "delete"]}
    //props.path
    return (
        <div class="container">
            <div class="mx-5">
                <table class="table">
                    <Header columns={props.columnsAlias} tools={props.tools} />
                    <Body
                        data={props.data}
                        columns={props.columns}
                        tools={props.tools}
                    />
                    <caption>
                        <i>{props.name}</i>
                    </caption>
                </table>
            </div>
        </div>
    );
}

export default Table;
