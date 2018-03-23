/**
 * Created by Guilherme on 3/23/18.
 */
import './style/FilterList.css';
import React from 'react';

class PeopleList extends React.Component {
    render() {
        return (
            <div className="peopleList">
                {Object.keys(this.props.peopleData).map(listItemKey => {
                    const listItem = this.props.peopleData[listItemKey];
                    return (<li className="peopleListItem" onClick={() => this.props.openProfileDialog(listItem.name)}>
                        {listItem.name}
                    </li>)
                })}
            </div>
        );
    }
}

export default PeopleList;