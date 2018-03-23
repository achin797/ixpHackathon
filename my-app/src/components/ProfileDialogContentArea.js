/**
 * Created by Guilherme on 3/22/18.
 */
import React from 'react';
import ProfileDialogContentItem from './ProfileDialogContentItem';


class ProfileDialogContentArea extends React.Component {


    makeContent() {
        return Object.keys(this.props.profileMoreInfo).map((key) =>{
            return <ProfileDialogContentItem key={key} title={key} content={this.props.profileMoreInfo[key]}> </ProfileDialogContentItem>
        })
    }

    render() {

        return (
            <div className="profileDialogContentArea">
                {this.makeContent()}
            </div>
        );
    }
}

export default ProfileDialogContentArea;