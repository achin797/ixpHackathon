/**
 * Created by Guilherme on 3/22/18.
 */
import React from 'react';
import ProfileDialogContentItem from './ProfileDialogContentItem';
import Map from "../resources/Map.png"



class ProfileDialogContentArea extends React.Component {


    makeContent() {
        return Object.keys(this.props.profileMoreInfo).map((key) =>{
            return <ProfileDialogContentItem key={key} title={key} content={this.props.profileMoreInfo[key]}> </ProfileDialogContentItem>
        })
    }

    render() {

        return (
            <div className="profileDialogContentArea">
                <div key="map">
                    <img className="map" src={Map}/>
                </div>
                {this.makeContent()}
            </div>

        );
    }
}

export default ProfileDialogContentArea;