import React, { useState } from "react";

const Table = ({ coinsData }) => {
    console.log(coinsData);
    const [rangeNumber, setRangeNumber] = useState(100);
    const [orderBy, setOrderBy] = useState("")

    const tableHeader = ["Prix", "MarketCap", "Volume", "1h", "1j", "1m", "6m", "1a", "ATH",]

    return (
        <div className="table-container">
            <div className="table-header">
                <div className="range-container">
                    <span>
                        Top{" "}
                        <input
                            type="text"
                            value={rangeNumber}
                            onChange={(e) => setRangeNumber(e.target.value)}
                        />
                    </span>
                    <input
                        type="range"
                        min="1"
                        max="250"
                        value={rangeNumber}
                        onChange={(e) => setRangeNumber(e.target.value)}
                    />
                </div>
                {tableHeader.map((el) => {
                    <li key={el}>
                        <input
                            type="radio"
                            name="header-el"
                            id={el}
                            defaultChecked={
                                el === orderBy || el === orderBy + "reverse" ? true : false} />
                        <label htmlFor={el}>{el}</label>
                    </li>

                })}
            </div>
        </div>
    );
};

export default Table;
