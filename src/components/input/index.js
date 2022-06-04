import * as React from 'react';

export default class TextInput extends React.Component {
    render = () => {
        return (
            <input
                name={this.props.name}
                placeholder={this.props.placeholder}
                type={this.props.password ? "password" : "text"}
                autoComplete="off"
                className="
                            outline-none rounded-sm
                            mt-4 p-2
                            border-b-16
                            focus:ring focus:ring-blue-500
                            ring ring-slate-300 ring-1
                            bg-slate-200"
            />
        );
    }
}
