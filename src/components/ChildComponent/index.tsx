import { useState } from "react";

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onNewValue: Function;
}

export default function ChildComponent({onNewValue}: Props) {
    const[count, setCount] = useState(0);

    function handleClick() {
        const newCount = count + 1
        setCount(newCount);
        onNewValue(newCount);
    }

    return(
        <div style={{border: "1px solid red", padding: "10px"}}>
            {count}
            <button onClick={handleClick}>Ok</button>
        </div>
    );
}