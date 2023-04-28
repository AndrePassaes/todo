import {useState, useEffect} from "react";

const Hooks = () => {
    let idade = 33;
    const [novaIdade, setNovaIdade] = useState(30);

    const changeAge = () => {
        idade = 34;
        console.log(idade);
    }; 

    const changeNewAge = () => {
        setNovaIdade(36);
    };

    useEffect(() => {
        console.log("Testa grande!")
    })



    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>        
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>

        </div>
    );
};

export default Hooks;