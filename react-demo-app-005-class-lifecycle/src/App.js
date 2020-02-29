import React from 'react';
import Loading from './components/Loading';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

window.API = {
    fetchPopularRepos(language) {
        // "language" can be "javascript", "ruby", "python", or "all"
        const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
        return fetch(encodedURI)
            .then((data) => data.json())
            .then((repos) => repos.items)
            .catch((error) => {
                console.warn(error)
                return null
            });
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            listOfRepos: [],
            activeLanguage: 'all',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    /**
     * Itegration point to external API to fetch data
     */
    componentDidMount() {
        this.fetchRepos(this.props.language);
    }
    /**
     * If state was updated, fetch repos again with selected language
     * @param  {Object} prevProps
     * @param  {Object} prevState
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.activeLanguage !== this.state.activeLanguage) {
            this.fetchRepos(this.state.activeLanguage);
        }
    }
    /**
     * Get popular repos of passed programming language
     * @param  {string} lang
     */
    fetchRepos(lang) {
        window.API.fetchPopularRepos(lang).then(repos => {
            this.setState({
                listOfRepos: repos,
                loading: false,
            });
        });
    }
    /**
     * Set in a state selected language
     * @param  {string} value
     */
    handleClick(value) {
        this.setState({
            activeLanguage: value,
            loading: true,
        })
    }
    /**
     * Dynamicaly renders loading component or list of repos
     */
    render() {
        return (this.state.loading)
            ? <Loading />
            : (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Nav selectedMenu={this.state.activeLanguage} handleClickMenu={this.handleClick} />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {this.state.listOfRepos.map(({ name, id, description, html_url, stargazers_count }) => {
                            return (
                                <div className="col-md-3" key={id}>
                                    <h4 className="card-header"><a href={html_url}>{name}</a></h4>
                                    <div className="card-body">
                                        <p className="lead">&#10032; {stargazers_count}</p>
                                        <p className="card-text">{description} </p>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            )
    }
}

export default App;