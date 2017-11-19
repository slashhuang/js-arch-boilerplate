import * as React from "react";
import * as ReactDom from "react-dom";
import { SaleDetail } from "../components/sale/detail";
import "./sale.less";
const node = document.getElementById("root");
ReactDom.render(<SaleDetail />, node);
