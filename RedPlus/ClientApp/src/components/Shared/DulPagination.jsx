import React, { Component } from 'react';

export class DulPagination extends Component {
    constructor(props) {
        super(props);

        this.pagerButtonClicked = this.pagerButtonClicked.bind(this); 
    }
    pagerButtonClicked(pageNumber) {
        console.log("Child", pageNumber); 
        this.props.pageIndexChanged(pageNumber - 1); // PageIndex를 부모 컴포넌트로 전송
    }
    render() {
        return (
            <div className="d-flex">
                <input type="button" value="1" onClick={() => this.pagerButtonClicked(1)} />
                <input type="button" value="2" onClick={() => this.pagerButtonClicked(2)} />
                <input type="button" value="3" onClick={() => this.pagerButtonClicked(3)} />
            </div>
        );
    }
}
