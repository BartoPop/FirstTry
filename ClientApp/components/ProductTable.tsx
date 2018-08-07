import * as React from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductRow from './ProductRow';
import { ProdutTableProps } from './ProductTableTypes';

class ProductTable extends React.Component<ProdutTableProps, {}> {
    render() {
        let productsAsArray = Object.keys((this.props as any).products).map((pid) => (this.props as any).products[pid]);
        let rows: any = [];
        productsAsArray.forEach((product) => {
            rows.push(
                <ProductRow product={product} key={product.id} ></ProductRow>
            );
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <ProductTableHeader column="name" ></ProductTableHeader>
                            <ProductTableHeader column="price" ></ProductTableHeader>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;