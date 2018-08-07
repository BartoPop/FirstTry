import * as React from "react";
import { ProductTableHeaderProps } from "./ProductsTableHeaderTypes";

class ProductTableHeader extends React.Component<ProductTableHeaderProps, {}> {
    render() {
        return (<th>
            {this.props.column}
            <button className="ProductTableHeader-current">&#x25B2;</button>
            <button>&#x25BC;</button>
        </th>
        );
    }
}

export default ProductTableHeader;