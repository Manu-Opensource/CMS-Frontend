import * as React from 'react';

export default class Text extends React.Component {
    render = () => {
        return (
            <h1 className = {this.props.className}>
                {this.props.children} 
            </h1>
        );
    }
}

export class ErrorText extends React.Component {
    render = () => {
        return (
            <Text className={"text-red-500 " + this.props.className}> {this.props.children} </Text>
        );
    }
}

export class BigText extends React.Component {
    render = () => {
        return (
            <Text className={"text-3xl " + this.props.className}> {this.props.children} </Text>
        );
    }
}

export class MedText extends React.Component {
    render = () => {
        return (
            <Text className={"text-2xl " + this.props.className}> {this.props.children} </Text>
        );
    }
}

export class SmallText extends React.Component {
    render = () => {
        return (
            <Text className={"text-xl " + this.props.className}> {this.props.children} </Text>
        );
    }
}
