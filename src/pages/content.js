import * as React from 'react';
import HandleAuthentication from '../controllers/auth';
import Sidebar from '../components/sidebar';
import { MedText, BigText } from '../components/text';
import Button from '../components/button';
import ListEntry from '../components/listentry';
import {ApiRequest} from '../controllers/api';

export default class Content extends React.Component {
    state = {
        collections: undefined
    }

    componentDidMount = () => {
        HandleAuthentication();
        this.getCollections();
    }

    getCollections = async () => {
        ApiRequest("collections").then(async (res) =>  {
            let collections = [];
            let i = 0;
            res = await res.json()
            res.forEach(collection => {
                if (!collection.startsWith("CMS"))
                collections.push(
                    <ListEntry className="max-w-[25vw]" text={collection} buttonText="Manage" key={i} href={`/collection?name=${collection}`}/>
                )
                i++;
            });
            this.setState({collections: collections});
        });
    }


    render = () => {
        return (
            <div className="flex">
                <Sidebar />
                <div className="h-screen w-[85vw]">
                    <BigText className="w-full mt-4 mb-4 text-center"> Manage Content. </BigText> 
                    <div className="flex h-full w-[90%] m-auto">
                        <div className="shadow-xl bg-slate-100/50 p-4 rounded-sm h-max text-center">
                            <MedText className="m-auto"> Collections </MedText>
                            {this.state.collections}
                            <Button className="mt-8" value="Create" href="/createcollection" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
