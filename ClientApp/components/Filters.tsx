import * as React from "react";
import { FiltersProps } from "./FiltersTypes";

class Filters extends React.Component<FiltersProps> {
    render() {
        return (<div>
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} />
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} />&nbsp;Only show stocked products
        </p>
            </form>
        </div>
        );
    }
}

export default Filters;