/**
 * Created by Guilherme on 3/22/18.
 */

import React from 'react';
import './style/ProfileDialog.css';
import ProfileDialogTitleArea from './ProfileDialogTitleArea';
import ProfileDialogContentArea from './ProfileDialogContentArea';
import logo from '../logo.svg';


class ProfileDialog extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop">
                <div className="profileDialog">

                    <div className="header">
                        <button className="closeBtn" onClick={this.props.onClose}>
                            <i class="fa fa-close"></i>
                        </button>
                    </div>

                    <ProfileDialogTitleArea profilePicture={logo} personName={this.props.personInfo.name}>

                    </ProfileDialogTitleArea>

                    <ProfileDialogContentArea profileMoreInfo={this.props.personInfo.moreInfo}>

                    </ProfileDialogContentArea>

                    {/*{this.props.children}*/}

                </div>
            </div>
        );
    }
}

export default ProfileDialog;