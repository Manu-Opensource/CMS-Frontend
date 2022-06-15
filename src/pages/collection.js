import * as React from 'react';
import Button from '../components/button';
import DocumentList from '../components/documentlist';
import Sidebar from '../components/sidebar';
import Text, { BigText } from '../components/text';

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
                    <div className="w-full mt-4 mb-4 flex content-center justify-center">
                        <BigText className="m-4 mr-36 text-center"> Collection [{this.state.name}] </BigText> 
                        <Button className="ml-36" value="Add Document"/>
                        <DocumentList collectionName={this.state.name} />
                    </div>
                </div>
            </div>
        );
    }
}
