import React, { Component } from 'react';

export class DulPagination extends Component {
    constructor(props) {
        super(props);

        this.pagerButtonClicked = this.pagerButtonClicked.bind(this); 
    }
    pagerButtonClicked(pageNumber, e) {
        e.preventDefault(); 
        console.log("Child", pageNumber); 
        this.props.pageIndexChanged(pageNumber - 1); // PageIndex를 부모 컴포넌트로 전송
    }

    displayData() {
        const { pageNumber, pageSize, pagerButtonCount, recordCount } = this.props;
        const pageCount = Math.ceil(recordCount / pageSize);

        const pages = [];

        //@* 처음 링크 *@
        if (pageNumber === 1) {
            pages.push(
                <li className="page-item" key={"first"}>
                    <a href="#" className="page-link first btn disabled"><span style={{fontSize: '7pt'}}>FIRST</span></a>
                </li>
            )
        }
        else {
            pages.push(
                <li className="page-item" key={"first"}>
                    <a href="#" className="page-link first btn" onClick={(e) => this.pagerButtonClicked(1, e)}>
                        <span style={{ fontSize: '7pt' }}>FIRST</span></a>
                </li >
            )
        }

        //@* 마지막 링크 *@
        if (pageNumber !== pageCount) {
            pages.push(
                <li className="page-item" key={"last"}>
                    <a href="#" className="page-link last btn" onClick={(e) => this.pagerButtonClicked(pageCount, e)}>
                        <span style={{ fontSize: '7pt' }}>LAST</span></a>
                </li >
            )
        }
        else {
            pages.push(
                <li className="page-item" key={"last"}>
                    <a href="#" className="page-link last btn disabled"><span style={{ fontSize: '7pt' }}>LAST</span></a>
                </li>
            )
        }

        return pages;
    }

    render() {
        const pages = this.displayData(); 
        return (
            <>
                <div className="d-flex">
                    <ul className="pagination pagination-sm mx-auto">
                        {pages}
                    </ul>
                </div>
            </>
        );
    }
}
