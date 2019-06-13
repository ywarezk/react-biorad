import React, {Suspense} from 'react';

export default ({filename}) => {
    const Lazy = React.lazy(() => import(filename));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Lazy />
            </div>
        </Suspense>
    )
}