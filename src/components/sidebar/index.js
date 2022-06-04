import * as React from 'react';
import Logo from '../logo';
import Text from '../text';

class Destination extends React.Component {
    render = () => {
        return (
            <a href={this.props.href} className={`
                                                m-auto mt-4 h-10 w-[90%]
                                                hover:bg-blue-500
                                                flex content-center
                                                rounded-md cursor-pointer
                                                align-middle text-center`}>
                <Text className="text-xl ml-[7.5%] flex items-center">
                    {this.props.text}
                </Text>
            </a>
        );
    }
}

export default class Sidebar extends React.Component {
    render = () => {
        return (
            <div className="h-screen w-[15vw] border-solid border-r-4 shadow-xl">
                <Logo/>
                <div className="w-[75%] m-auto h-1 bg-slate-200 rounded-lg" />
                <ul className="grid grid-cols-1">
                    <Destination text="Home" href="/"/>
                    <Destination text="Content" href="/content"/>
                </ul>
            </div>
        );
    }
}
