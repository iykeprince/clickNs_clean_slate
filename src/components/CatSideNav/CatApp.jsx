import React, { Component } from "react";
import classNames from 'classnames';
import "./CatStyle.scss"
import WorkOrders from "./WorkOrders";
import ProductRow from "./ProductRow";
import BtnGroup from "./BtnGroup";

class CatApp extends Component {
    state = {
        listView: true,
        gridView: false,
    };
    handleList = () => {
        this.setState({
            listView: true,
            gridView: false,
        })
    };
    handleGrid = () => {
        this.setState({
            listView: false,
            gridView: true,
        })
    };

    render() {
        let btnClass = classNames('item', {
            'list-group-item': this.state.listView,
            'grid-group-item': this.state.gridView,
        });
        let rows = WorkOrders.map(product => {
            return <ProductRow
                key={product.id}
                data={product}
                listView={this.state.listView}
                gridView={this.state.gridView}
            />
        });
        return <div className="">
            <div className="row row-eq-height gray-bg">
                
                <div className="col-sm-9 col-xs-12 col-md-12 main-container">
                    <div className="row rowCatApp_wrap">
                        <div className='col align-self-center'>18637 products found</div>
                        <div className="col-sm-offset-8 col-sm-4 col text-right grid-space">
                            <BtnGroup
                                handleList={this.handleList}
                                handleGrid={this.handleGrid}
                            />
                        </div>
                    </div>

                    <div className={btnClass}>
                        <div className="row auto-clear">
                            {rows}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default CatApp;
