import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import data from './resources/People.json';
import ProfileDialog from './components/ProfileDialog';
import PeopleList from './components/PeopleList';
import './components/style/App.css';
import TreeSketch from './resources/IMG_1263.jpg';
import SAPeople from './resources/SAPeople.png';


const KEYS_TO_FILTERS = ['name', 'team', 'moreInfo.Features.Current Work'];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isDialogOpen: false,
            selectedPersonInfo: this.personInfo,
            filteredData: data
        };

        this.searchUpdated = this.searchUpdated.bind(this)
    }

    openProfileDialog = (name) => {
        const selectedPersonInfo = data[name];
        this.setState({
            isOpen: true,
            isDialogOpen: true,
            selectedPersonInfo: selectedPersonInfo
        });

    }

    closeProfileDialog = () => {
        this.setState({
            isOpen: false,
            isDialogOpen: false,
            selectedPersonInfo: undefined
        });
    }

    searchUpdated(term) {
        this.setState({
            filteredData: Object.keys(data).map(key => data[key]).filter(createFilter(term, KEYS_TO_FILTERS)),
        })

    }

    render() {
        return (
            <div className="App">
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <div className="appHeader">
                    <img className="sapeople" src={SAPeople} />
                    }
                    <label className="appTitle">Team Orca</label>
                </div>

                <ProfileDialog show={this.state.isDialogOpen} onClose={this.closeProfileDialog}
                               personInfo={this.state.selectedPersonInfo}/>

                <img className="treeSketch" src={TreeSketch}/>

                <SearchInput className="searchInput" onChange={this.searchUpdated}/>
                <PeopleList peopleData={this.state.filteredData} openProfileDialog={this.openProfileDialog}/>


            </div>
    );
    }
    }

    export default App;



