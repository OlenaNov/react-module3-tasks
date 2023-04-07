import { Component } from "react";

const KEY_STORAGE = 'index';

export class Reader extends Component {
    state = {
        // index: Number(JSON.parse(localStorage.getItem(KEY_STORAGE))) || 0,
        index: 0,
    };
    
    changePage = value => this.setState({ index: this.state.index + value });

    componentDidMount() {
        this.setState({ index: Number(JSON.parse(localStorage.getItem(KEY_STORAGE))) || 0, })
    };

    componentDidUpdate(_, prevState) {
        if(prevState.index !== this.state.index) {
            localStorage.setItem(KEY_STORAGE, JSON.stringify(this.state.index));
        };
    };

    render() {
        const { items } = this.props;
        const { index } = this.state;
        const total = items.length;
        const currentPage = index + 1;
        const { id, title, text } = items[index];

        return (
            <div>
                <section>
                    <button 
                        type="button" 
                        onClick={() => this.changePage(-1)}
                        disabled={index === 0}
                    >Back</button>
                    <button 
                        type="button" 
                        onClick={() => this.changePage(1)}
                        disabled={index === total - 1}
                        >Forward</button>
                </section>

                <p>{currentPage}/{total}</p>

                <article key={id}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </article>
            </div>
        );
    };
};