import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
        this.mostUpvoted = this.mostUpvoted.bind(this);
        this.mostRecent = this.mostRecent.bind(this);
    }

    componentDidMount () {
        this.setState({ articles: this.props.articles.sort((a,b) => b.upvotes - a.upvotes)});
    }


    mostUpvoted = () => {
        const sortArray = this.state.articles.sort((a,b) => b.upvotes - a.upvotes)
        this.setState({...this.state, articles: sortArray });
    }

    mostRecent = () => {
        const sortArray = this.state.articles.sort((a,b) => new Date(b.date) - new Date(a.date))
        this.setState({...this.state, articles: sortArray });
    }

    render () {
        return (
            <div className="App">
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                    <button 
                        data-testid="most-upvoted-link" 
                        onClick={this.mostUpvoted}
                    className="small">Most Upvoted</button>
                    <button 
                        onClick={this.mostRecent} 
                        data-testid="most-recent-link" 
                    className="small">Most Recent</button>
                </div>
                <Articles articles={this.state.articles}/>
            </div>
        );
    }
}

export default App;
