import React, {Component} from 'react';
import './App.css';
import ProfileDialog from './components/ProfileDialog';
// import Data from "./dfdsf"

class App extends Component {

    personInfo = {
        "name": "Eva Cox",
        "team": "FPA-868",
        "orgParent": "Tamara Barnett",
        "orgChildren": [
            {
                "name": "Holman Cross"
            },
            {
                "name": "Kelley Dunlap"
            },
            {
                "name": "Harriett Battle"
            },
            {
                "name": "Phelps Farmer"
            },
            {
                "name": "Langley Keller"
            }
        ],
        "picture": "./Profiles/P1.png",
        "moreInfo": {
            "contact": {
                "email": "Eva.Cox@sap.com",
                "slack": "@Eva",
                "officePhone": "+1 (982) 528-3492",
                "mobilPhone": "+1 (996) 460-2656"
            },
            "location": {
                "deskNumber": 68,
                "office": "Vancouver, Canada",
                "map": "./Maps/Map1.png"
            },
            "features": {
                "currentlyWorking": {
                    "task": "Front-End"
                },
                "previouseWork": [
                    {
                        "task": "Back-End"
                    },
                    {
                        "task": "Development"
                    }
                ]
            },
            "localTime": "Vancouver",
            "basicInfo": {
                "iNum": "I111505",
                "age": 30
            }
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isDialogOpen: false,
            selectedPersonInfo: this.personInfo
        };
    }

    openProfileDialog = () => {
        if (this.state.selectedPersonInfo) {
            this.setState({
                isOpen: true,
                isDialogOpen: true
            });
        }
    }

    closeProfileDialog = () => {
        this.setState({
            isOpen: false,
            isDialogOpen: false,
            selectedPersonInfo: undefined
        });
    }

    setSelectedPerson(selectedPersonInfo) {
        this.setState({
            selectedPersonInfo: selectedPersonInfo
        });
    }

    render() {
        return (
            <div className="App">
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">Team Orca</h1>
                </header>

                <div onClick={this.openProfileDialog}>
                    <label>Guilherme Lameira de Almeida</label>
                </div>

                <ProfileDialog show={this.state.isDialogOpen} onClose={this.closeProfileDialog}
                               personInfo={this.state.selectedPersonInfo}>
                </ProfileDialog>

            </div>
        );
    }


}

export default App;
