import * as React from 'react';

export default class Button extends React.Component {
    render = () => {
        let props = {};
        props.className = `
                            p-4 m-1
                            rounded-md
                            bg-blue-500 hover:bg-blue-600
                            hover:shadow-lg
                            cursor-pointer
                            text-l text-center `;
        props.className += this.props.className;
        props.value = this.props.value;
        props.onClick = this.props.onClick;
        
        if (this.props.formSubmit) props.type = "submit";
        else props.type = "button";

        if (this.props.href)
            props.onClick = () => {window.location.assign(this.props.href)}

        return (
            <input
                {...props}    
            />
        );
    }
}
