import React, {useState} from 'react';
import './App.css';
import Articles from './components/Articles';

function NewApp ({articles}) {
    const [localArticles, setlocalArticles] = useState(articles)

   const mostUpvoted = () => {
        const sortArray = localArticles.sort((a,b) => b.upvotes - a.upvotes)
        setlocalArticles(sortArray);
    }

    const mostRecent = () => {
        const sortArray = localArticles.sort((a,b) => new Date(b.date) - new Date(a.date))
        setlocalArticles({localArticles: sortArray});
    }

        return (
            <div className="App">
                <h2 style={{textAlign:'center'}}>With Hooks</h2>
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                    <button 
                        data-testid="most-upvoted-link" 
                        onClick={() => mostUpvoted()}
                    className="small">Most Upvoted</button>
                    <button 
                        onClick={() => mostRecent()}
                        data-testid="most-recent-link" 
                    className="small">Most Recent</button>
                </div>
                <Articles articles={localArticles}/>
            </div>
        );
}

export default NewApp;
