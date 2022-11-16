//import CreateButton from "../table/CreateBotton";
//import SearchBar from "../table/SearchBar";
import SearchBar from "./searchbar";
import Table from "./table";


function Page(props) {
    
    return (
        <div>

                <Table
                    name={props.name}
                    data={props.data}
                    path={props.path}
                    columns={props.columns}
                    columnsAlias={props.columnsAlias}
                    tools={props.tools}
                />
                {/*<CreateButton path={props.path} />
                        <SearchBar
                            data={props.data}
                            setDataforTable={setDataforTable}
                        
                            columns={props.columns}
                        />*/}

                {/*<Table
                        data={dataForTable}
                        path={props.path}
                        name={props.name}
                        columns={props.columns}
                        columnsAlias={props.columnsAlias}
                        tools={props.tools}
                    />*/}
        </div>
    );
}

export default Page;
