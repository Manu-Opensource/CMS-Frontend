import * as React from 'react';
import Sidebar from '../components/sidebar';
import Text from '../components/text';

export default class Collection extends React.Component {
    state = {
        name: undefined,
        documents: undefined
    }

    componentDidMount = () => {
        const query = new URLSearchParams(window.location.search);
        this.setState({name: query.get('name')});
    }

    render = () => {
        return (
            <div className="flex">
                <Sidebar/>
                <div className="h-screen w-[85vw]">
                    <Text> Collection [{this.state.name}] </Text> 
                </div>
            </div>
        );
    }
}
