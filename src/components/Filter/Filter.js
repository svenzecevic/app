import * as React from "react";

import styles from "./index.css";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <form class="filter">
          <p>Refine your results</p>
          <div>
            <div>
              <div>
                <div>
                  <label>Price from</label>
                </div>
                <div>
                  <input
                    min="0"
                    max="10000000"
                    type="number"
                    id="price-from"
                    placeholder="£1,000,000"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label>Postcode</label>
                </div>
                <div>
                  <select>
                    <option className="nesto">Choose...</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label>Sort Order</label>
                </div>
                <div>
                  <select>
                    <option value="">Choose...</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
