import React, {Component} from 'react';
import './App.css';

//COMPONENTS
import Header from './components/headers';
import JSON from './db.json';
import NewsList from './components/news_list';


class App extends Component {

    state = {
        news: JSON,
        filtered: JSON
    };

    filterNews(keywords) {
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({filtered});

    }

    render() {
        return (
            <div>
                <h1><Header newsSearch={keywords => this.filterNews(keywords)}/></h1>
                <NewsList news={this.state.filtered}/>
            </div>
        );
    }
}

export default App;
