import * as React from 'react';
import { ApiRequest } from '../../controllers/api';
import ListEntry from '../listentry';

export default class DocumentList extends React.Component {
    state = {
        data: null,
        filtered: null,
        ui: null,
    }

    retrieveData = async () => {
        let data = await (await ApiRequest("getcollection", {name: this.props.collectionName})).json()
        return data
    }

    genUI = (data) => { 
        console.log("Generating UI");
        let ret = [];
        data.forEach(doc => {
            ret.push(
                <ListEntry className="w-[25%] m-[4%] h-min text-center" text={doc.Name} buttonText="Edit" key={doc.id} href={`/document?id=${doc.Id}&name=${this.props.collectionName}`}/>);
        });
        this.setState({ui: ret});
    }

    updateFilter = async (filter) => {
        let filtered = this.state.data.filter((o) => {
            filter.forEach(c => {
                let field = o[c.field];
                let target = c.target;
                let cond = c.condition;
                if (cond === "Equal" && field !== target)
                    return false;
                if (cond === "Greater" && field <= target)
                    return false;
                if (cond === "GreaterE" && field < target)
                    return false;
                if (cond === "Less" && field >= target)
                    return false;
                if (cond === "LessE" && field > target)
                    return false;
            });
            return true;
        });
        this.setState({filtered: filtered});
    }

    componentDidUpdate = async (p) => {
        if (p && p.collectionName !== this.props.collectionName) {
            let data = await this.retrieveData();
            this.setState({data: data, filtered: data});
            this.genUI(data);
        } 
    }

    render = () => {
        return (
            <div className={"flex flex-wrap overflow-scroll " + this.props.className}>
                {this.state.ui}
            </div>
        );
    }
}
