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
        const pageIndex = pageNumber - 1; 

        const pages = [];

        //@* 처음 링크 *@
        if (pageNumber === 1) {
            pages.push(
                <li className="page-item" key={"first"}>
                    <a href={"first"} className="page-link first btn disabled"><span style={{ fontSize: '7pt' }}>FIRST</span></a>
                </li>
            );
        }
        else {
            pages.push(
                <li className="page-item" key={"first"}>
                    <a href={"first"} className="page-link first btn" onClick={(e) => this.pagerButtonClicked(1, e)}>
                        <span style={{ fontSize: '7pt' }}>FIRST</span></a>
                </li >
            );
        }

        //@* 페이지 수만큼 숫자 버튼 출력 *@
        let i = 0; // 숫자 버튼, 다음 n개에서 사용
        let start = parseInt(pageIndex / pagerButtonCount) * pagerButtonCount + 1; //[?]
        let end = (parseInt(pageIndex / pagerButtonCount) + 1) * pagerButtonCount; //[?]

        for (i = start; i <= end; i++) {
            let currentNumber = i; // 현재 페이지 번호 임시 저장

            // 페이지 수보다 크면 종료
            if (i > pageCount) {
                break;
            }

            // 현재 보고있는 페이지면 링크 제거
            if (i === pageNumber) {
                pages.push(
                    <li className="page-item active" key={currentNumber}>
                        <a href={currentNumber} className="page-link current btn disabled"><span style={{ fontSize: '7pt' }}>{i}</span></a>
                    </li>
                );
            }
            else {
                pages.push(
                    <li className="page-item" key={currentNumber}>
                        <a href={currentNumber} className="page-link current btn" onClick={(e) => this.pagerButtonClicked(currentNumber, e)}>
                            <span style={{ fontSize: '7pt' }}>{i}</span></a>
                    </li >
                );
            }
        }

        //@* 마지막 링크 *@
        if (pageNumber !== pageCount) {
            pages.push(
                <li className="page-item" key={"last"}>
                    <a href={"last"} className="page-link last btn" onClick={(e) => this.pagerButtonClicked(pageCount, e)}>
                        <span style={{ fontSize: '7pt' }}>LAST</span></a>
                </li >
            );
        }
        else {
            pages.push(
                <li className="page-item" key={"last"}>
                    <a href={"last"} className="page-link last btn disabled"><span style={{ fontSize: '7pt' }}>LAST</span></a>
                </li>
            );
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
