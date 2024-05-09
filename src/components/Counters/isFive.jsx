import React, { useMemo } from 'react';

let render = 0;

const IsFive = ({ value }) => {
    console.log(`isFive render ${++render}`);

    const getResult = () => { 
        console.log(value);
        let i = 0;
        while (i < 1000000000) i++;
        return value === 5 ? 'Five' : 'Not Five';
    }

    const result = useMemo(getResult, [value]);

    return (
        <div>
            {result}
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps) => { 
    // false - render
    // console.log(prevProps, nextProps);
    return nextProps.value !== 5 && prevProps.value !== 5
});


