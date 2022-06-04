import * as React from 'react';

export default class Button extends React.Component {
    render = () => {
        let props = {};
        props.className = `
                            p-1 m-1
                            rounded-md
                            bg-blue-500 hover:bg-blue-600
                            hover:shadow-lg
                            cursor-pointer
                            text-l text-center `;
        props.className += this.props.className;
        props.value = this.props.value;
        
        if (this.props.formSubmit)
            props.type = "submit";

        if (!this.props.href)
            return (
                <input
                    {...props}    
                />
            );
        else
            return (
                <a href={this.props.href} className={this.props.center ? "grid justify-center" : ""}>
                    <input
                        {...props}
                    />
                </a>
            );
    }
}
