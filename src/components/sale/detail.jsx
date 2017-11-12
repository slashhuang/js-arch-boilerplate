import React from 'react';
import './detail.less';
export class SaleDetail extends React.Component {
    render() {
        return (
            <div className="sale-detail-wrapper">
                <div className="detail-img"></div>
                <div className="detail-info">
                    <h1>雷神</h1>
                    <ul>
                        <li>动作冒险</li>
                    </ul>
                    <button>点击购买</button>
                </div>
            </div>
        );
    }
}
