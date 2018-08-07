import * as React from "react";
import { ProdutRowProps } from "./ProductRowTypes";

class ProductRow extends React.Component<ProdutRowProps, {}> {
    render() {
        return (<tr>
            <td>
                <span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock'}>
                    {this.props.product.name}
                </span>
            </td>
            <td>
                {this.props.product.price}
            </td>
            <td>
                <button style={{ color: 'red' }}>x</button>
            </td>
        </tr>
        );
    }
}

export default ProductRow;