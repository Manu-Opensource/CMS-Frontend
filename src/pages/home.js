import * as React from 'react'
import HandleAuthentication from '../controllers/auth';
import { ApiRequest } from '../controllers/api';
import Sidebar from '../components/sidebar';
import { MedText, BigText } from '../components/text';
import Button from '../components/button';
import ListEntry from '../components/listentry';

export default class Home extends React.Component {
    state = {
        recentChanges: undefined
    }
    
    componentDidMount = () => {
        HandleAuthentication(); 
        this.getRecentChanges();
    }

    getRecentChanges = async() => {
        ApiRequest("getcollection", {name: "CMSContentChanges"}).then(async (res) => {
            let recentChanges = [];
            let i = 0;
            res = await res.json();
            res.forEach(change => {
                recentChanges.push(
                    <ListEntry className="max-w-[25vw]" text={change.change} key={i}/>
                );
                i++;
            });
            recentChanges.reverse()
            recentChanges = recentChanges.slice(0, 5);
            this.setState({recentChanges: recentChanges});
        });
    }

    render = () => {
        return (
            <div className="flex">
                <Sidebar />
                <div className="h-screen w-[85vw]">
                    <BigText className="w-full mt-4 mb-4 text-center"> Welcome Back. </BigText> 
                    <div className="flex h-full w-[90%] m-auto">
                        <div className="shadow-xl bg-slate-100/50 p-4 rounded-sm h-max text-center">
                            <MedText className="m-auto"> Recent Content Changes </MedText>
                            {this.state.recentChanges}
                            <Button className="mt-8" value="View More" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
