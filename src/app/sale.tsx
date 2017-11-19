import './sale.less';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { SaleDetail } from '../components/sale/detail'
const node = document.getElementById('root');
ReactDom.render(<SaleDetail />, node);
