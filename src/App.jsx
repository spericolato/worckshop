import React,{ useState } from "react";

export default ()=>{

    const data = [
        {
            Username: "booker12",
            Identifier: "9012",
            "First Name": "Rachel",
            "Last Name": "Booker",
        },
        {
            Username: "grey07",
            Identifier: "2070",
            "First Name": "Laura",
            "Last Name": "Grey",
        },
        {
            Username: "johnson81",
            Identifier: "4081",
            "First Name": "Craig",
            "Last Name": "Johnson",
        },
        {
            Username: "jenkins46",
            Identifier: "9346",
            "First Name": "Mary",
            "Last Name": "Jenkins",
        },
        {
            Username: "smith79",
            Identifier: "5079",
            "First Name": "Jamie",
            "Last Name": "Smith",
            VIP: "true",
        },
    ];

    const [sortById,setSortById] = useState(data.map(x=>{
        return<tr>
            <td>{x.Username}</td>
            <td>{x.Identifier}</td>
            <td>{x["First Name"]}</td>
            <td>{x["Last Name"]}</td>
            <td>{x.VIP}</td>
        </tr>
    
    }))


        let bubbleSort = (inputArr) => {
            let len = inputArr.length;
            for(let j in inputArr){
                let y = inputArr[j].Identifier
                j++
                let x = inputArr[j].Identifier
                while(x>y){
                    let tmp = inputArr[y];
                    inputArr[y] = inputArr[x];
                    inputArr[x] = tmp;
                    console.log(inputArr[x])
                }
            }
    
        };

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>username</th>
                        <th onClick={()=>{bubbleSort(data)}}>identifier</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>vip</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortById
                    }
                </tbody>
            </table>
        </>
    )
}