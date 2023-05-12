import React from "react";

interface ContainerProps {
    style: React.CSSProperties,
}

const Container = (props: ContainerProps) => {
    return (
        <>
            <div style={props.style}>
                <h2>Text content</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur id enim eligendi mollitia amet soluta, commodi dolorem minus ea. Veniam nemo cum enim expedita quae repellat hic vitae ducimus!</p>
            </div>
        </>
    )
}
 
export default Container;