import * as React from "react";

import "./index.css";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <form>
          <p class="filter">Refine your results</p>
          <div>
            <div>
              <div>
                <div>
                  <label class="filter">Price from</label>
                </div>
                <div>
                  <input
                    min="0"
                    max="10000000"
                    type="number"
                    class="filter"
                    placeholder="£1,000,000"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label class="filter">Postcode</label>
                </div>
                <div>
                  <select>
                    <option class="filter">Choose...</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label class="filter">Sort Order</label>
                </div>
                <div>
                  <select>
                    <option class="filter">Choose...</option>
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
