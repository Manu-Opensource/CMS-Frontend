import * as React from 'react';
import Button from '../components/button';
import DocumentEditor from '../components/documenteditor';
import Sidebar from '../components/sidebar';
import Text, { BigText } from '../components/text';

export default class AddDocument extends React.Component {
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
                <div className="h-screen w-[85vw] overflow-scroll">
                    <div className="w-full mt-4 mb-4 content-center justify-center">
                        <BigText className="m-4 mr-36 text-center"> Adding Document To Collection [{this.state.name}] </BigText> 
                        <DocumentEditor newDocument/>
                    </div>
                </div>
            </div>
        );
    }
}
