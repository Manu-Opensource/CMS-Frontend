import * as React from 'react'
import HandleAuthentication from '../controllers/auth';
import Sidebar from '../components/sidebar';
import Text, { MedText, BigText } from '../components/text';
import Button from '../components/button';
import ListEntry from '../components/listentry';

export default class Home extends React.Component {
    
    componentDidMount = () => {
        HandleAuthentication(); 
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
                            <ListEntry className="max-w-[25vw]" text="Added [C++ Compilation Pipeline Explained]" buttonText="Edit"/>
                            <ListEntry className="max-w-[25vw]" text="Modified [Python 'crypto' Library Explained]" buttonText="Edit"/>
                            <Button className="mt-8" value="View More" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
