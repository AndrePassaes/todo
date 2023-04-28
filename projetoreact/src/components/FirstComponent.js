import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
    //Comentário
    const name = "Nazgul";
    return (
        <div className="firstComponent">
            {/*Comentário no JSX*/}
            <p>Primeiro Componente</p>            
            {2 + 2}
            {console.log("JavaScript")}
            <p>Nome: {name}</p>
            <AnotherComponent/>
            
        </div>
    )
}

export default FirstComponent