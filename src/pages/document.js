import * as React from 'react';
import DocumentEditor from '../components/documenteditor';
import Sidebar from '../components/sidebar';
import { BigText } from '../components/text';

export default class Document extends React.Component {
    state = {
        name: undefined
    }

    componentDidMount = () => {
        const query = new URLSearchParams(window.location.search);
        this.setState({id: query.get('id'), name: query.get('name')});
    }

    render = () => {
        return (
            <div className="flex">
                <Sidebar/>
                <div className="h-screen w-[85vw] overflow-scroll">
                    <div className="w-full mt-4 mb-4 content-center justify-center">
                        <BigText className="m-4 mr-36 text-center"> Document [{this.state.name}] </BigText> 
                        {this.state.name ?
                        <DocumentEditor collectionName={this.state.name} documentId={this.state.id}/>
                        : <div/>}
                    </div>
                </div>
            </div>
        );
    }
}
