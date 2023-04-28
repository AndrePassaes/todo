const List = () =>{
    const items = [{
            id: 1,
            name: "Nazgul",
        },{
            id: 2,
            name: "André",
        },{
            id: 3,
            name: "Ana",
        },
    ];
    return(
     <div>
        {items.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>

        ))}
    </div>
    );
};

export default List;