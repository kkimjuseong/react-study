import React from 'react';

const CheckBox = () => {
    return (
        <>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="styled-checkbox"
                />
                <label
                    htmlFor="styled-checkbox"

                >
                    Check me!
                </label>
            </div>
        </>
    );
};

export default CheckBox;