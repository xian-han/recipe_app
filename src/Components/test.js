import React from 'react'
const Trigger=()=>{
    return(
        <button onClick={clickEvent}>
            trigger
        </button>
    );
};

const clickEvent =()=>{
    var p = document.getElementsByTagName("p");
    p[0].innerHTML ="hey jude";
    console.log()
};
function test() {
    const name = <h1 id="name">Sam</h1>;
    const bigger = ()=>{
        const array = [1,2,3];
        if(array[0]<array[1]){
            return <p>bigger</p>;
        }else{
            return <p>smaller</p>;
        }
    };
    return (
        <div id="test">
            {name}
            {bigger()}
            Hello World<br/>
            <Trigger />
        </div>
    );
}

export default test
