/**
 * Created by Guilherme on 3/22/18.
 */

/**
 * Created by Guilherme on 3/22/18.
 */
import React from 'react';

class ProfileDialogContentItem extends React.Component {

    makeContent() {
        return Object.keys(this.props.content).map((key) =>{
            return (<div className="row" key={key}>
                <label className="key">{key}: </label>
                <label className="info">{this.props.content[key].toString()}</label>
            </div>);
        })

    }

    render() {

        return (
            <div className="profileDialogContentItem">
                <div className="titleContainer">
                    <label className="title">{this.props.title}</label>
                </div>
                {this.makeContent()}

            </div>
        );
    }
}

export default ProfileDialogContentItem;
