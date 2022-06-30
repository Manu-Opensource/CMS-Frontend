import * as React from 'react';
import { ApiRequest } from '../../controllers/api';
import Button from '../button';
import TextInput from '../input';

export default class DocumentEditor extends React.Component {
    state = {
        data: [],
        xmlModalVisible: false,
        xmlEntryIndex: "",
    }

    retrieveData = async (collectionName) => { //ToDo
        return await (await ApiRequest("getcollection", {name: collectionName})).json();  
    }

    genUI = () => { 
        let ret = [];
        let i = 0;
        this.state.data.forEach(entry => {
            let x = i;
            ret.push(
            <tr key={i} name={entry.name} className="flex content-center place-content-around">
                <td name="name"> <TextInput className=""/></td>
                <td name="value" className={entry.isXML ? "hidden" : "flex"}><TextInput className=""/></td>
                <td name={entry.isXML ? "XML" : ""} className={entry.isXML ? "flex" : "hidden"}><Button value="Edit XML" className="pl-[4.5rem] pr-[4.5rem] m-0 mt-4 mb-0 pt-2 pb-2" onClick={() => {
                    this.editXMLModal(x);
                }}/></td>
                <td name="delete"><Button value="Delete" onClick={() => {this.deleteEntry(x)}}/></td>
            </tr>);
            i++;
        });
        return (
            <table className="w-full">
                <thead>
                    <tr className="flex content-center place-content-around w-full text-center">
                        <th>Entry Key</th>
                        <th>Entry Value</th>
                        <th>Delete Entry</th>
                    </tr>
                </thead>
                <tbody id="DocumentTable">
                    {ret}
                </tbody>
            </table>
        );
    }

    editXMLModal = (entryIndex) => {
        this.setState({xmlModalVisible: true, xmlEntryIndex: entryIndex, xmlData: this.state.data[entryIndex].value});
        console.log(this.state);
    }

    closeXML = () => {
        let data = this.state.data;
        data[this.state.xmlEntryIndex].value = document.getElementById("xmlEditor").value;
        this.setState({xmlModalVisible: false, data: data});
    }

    componentDidMount = async  () => {
        if (!this.props.newDocument) {
            let data = await this.retrieveData(this.props.collectionName);
            this.setState({data: data, filtered: data});
        }
    }

    addEntry = (isXML) => {
        let data = this.state.data;
        data.push({name: "", value: "", isXML: isXML})
        this.setState({data: data});
    }

    deleteEntry = (i) => {
        let data = this.save();
        data.splice(i, 1);
        console.log(data);
        this.setState({data: data});
        this.updateUI(data);
    }

    save = () => {
        let table = document.getElementById("DocumentTable");
        let data = this.state.data;
        for (let i = 0; i < table.children.length; i++) {
            let entry = table.children[i];
            for (let j = 0; j < entry.children.length; j++) {
                let child = entry.children[j];
                if (child.getAttribute("name") === "name") data[i].name = child.children[0].value;
                else if (child.getAttribute("name") === "value" && !data[i].isXML) data[i].value = child.children[0].value;
            }
        }
        this.setState({data: data});
        return data;
    }

    updateUI = (data) => {
        let table = document.getElementById("DocumentTable");
        if (!data)
            data = this.state.data;
        for (let i = 0; i < Math.min(table.children.length, data.length); i++) {
            let entry = table.children[i];
            for (let j = 0; j < entry.children.length; j++) {
                let child = entry.children[j];
                if (child.getAttribute("name") === "name") child.children[0].value = data[i].name;
                else if (child.getAttribute("name") === "value") child.children[0].value = data[i].value;
            }
        }
    }

    render = () => {
        return (
            <div className="flex flex-col">
                {this.state.xmlModalVisible ?
                    <div className="z-10 h-[75vh] flex flex-col">
                        <textarea id="xmlEditor" className=" w-[90%] h-[90%] m-auto"defaultValue={this.state.xmlData}/>
                        <Button value="Close" onClick={this.closeXML}/>
                    </div>
                : <div/> }

                <div className={`flex-col m-auto w-full ${this.state.xmlModalVisible ? "hidden" : "flex"}`}>
                    {this.genUI()}
                    <div className="m-auto">
                        <Button value="Add Text Entry" className="w-min-content" onClick={() => {this.addEntry(false)}}/>
                        <Button value="Add XML Entry" className="w-min-content" onClick={() => {this.addEntry(true)}}/>
                        <Button value="Save"/>
                    </div>
                </div>
            </div>
        );
    }
}
