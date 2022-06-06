import * as React from 'react';
import Button from '../button';
import {SmallText} from '../text';

export default class ListEntry extends React.Component {
    render = () => {
        return (
            <div className={"shadow-xl bg-slate-100/50 rounded-md p-4 mt-8 " + this.props.className}>
                <SmallText> {this.props.text} </SmallText> 
                {this.props.buttonText ?
                <Button value={this.props.buttonText} href={this.props.href} onClick={this.props.onClick}/>
                : <div/>}
            </div>
        );
    }
}
