import React from 'react';
import Card from "./UI/Card";

const Greet = (ccc) => {

    return (
        <>
            <Card className="border-green">
                <div>
                    Hello REACT!
                    {ccc.children}
                </div>
            </Card>
        </>
    );
};

export default Greet;