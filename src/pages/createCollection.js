import * as React from 'react';
import { ApiRequest } from '../controllers/api';
import Button from '../components/button';
import TextInput from '../components/input';
import Sidebar from '../components/sidebar';
import { BigText, ErrorText } from '../components/text';

export default class CreateCollection extends React.Component {
    state = {
        valid: true
    }

    createCollection = async(event) => {    
        event.preventDefault()
        const res = await ApiRequest("addcollection", {
            name: event.currentTarget.elements.name.value,
        });
        if (res.ok)
            window.location.assign("/content");
        else
            this.setState({valid: false});
    }

    render = () => {
        return (
            <div className="flex">
                <Sidebar/>
                <div className="grid content-center justify-center h-screen w-[85vw]">
                    <BigText className="w-full mt-4 mb-4 text-center"> Create Collection. </BigText> 
                    <form onSubmit={this.createCollection} className="grid content-center justify-center">
                        <TextInput name="name" placeholder="Collection Name" className="m-auto"/>
                        <Button formSubmit value="Create" className="mt-4 p-4"/>
                    </form>
                    {this.state.valid ?
                    <div/>
                    :
                    <ErrorText className="mt-2"> Error (Most likely, collection with name already exists) </ErrorText>
                    }

                </div>
            </div>
        );
    }
}
