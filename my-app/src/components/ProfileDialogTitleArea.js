/**
 * Created by Guilherme on 3/22/18.
 */
import React from 'react';

class ProfileDialogTitleArea extends React.Component {
    render() {

        return (
            <div className="titleArea">

                <img src={this.props.profilePicture} className="profilePicture"/>

                <label className="nameLabel">{this.props.personName}</label>

            </div>
        );
    }
}

export default ProfileDialogTitleArea;