import * as React from 'react';
import { ApiRequest } from '../../controllers/api';
import Button from '../button';

export default class DocumentList extends React.Component {
    state = {
        data: null,
        filtered: null,
    }

    retrieveData = async (collectionName) => {
        console.log("Retrieving data", collectionName); 
        return await (await ApiRequest("getcollection", {name: collectionName})).json();  
    }

    genUI = () => { 
        if (!this.state.filtered) return;
        console.log(this.state.filtered)
        let ret = [];
        let i = 0;
        this.state.filtered.forEach(doc => {
            ret.push(
            <tr key={i}>
                <td>{doc.name}</td>
                <td><Button value="Edit" /></td>
            </tr>);
            i++;
        });
        return (
            <table>
                <th>Document Name</th>
                <th>Edit Document</th>
            </table>
        );
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

    componentDidMount = async  () => {
        if (this.props.collectionName) {
            let data = await this.retrieveData(this.props.collectionName);
            this.setState({data: data, filtered: data});
        }
    }

    render = () => {
        return (
            <div>
                {this.genUI()}
            </div>
        );
    }
}
