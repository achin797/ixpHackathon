/**
 * Created by Guilherme on 3/22/18.
 */
import React from 'react';

class ProfileDialogTitleArea extends React.Component {
    render() {
        console.log(this.props.profilePicture)

        return (
            <div className="titleArea">

                <div className="profilePictureContainer">
                    <img src={this.props.profilePicture} className="profilePicture"/>
                </div>

                <h1 className="personName">{this.props.personName}</h1>

            </div>
        );
    }
}

export default ProfileDialogTitleArea;