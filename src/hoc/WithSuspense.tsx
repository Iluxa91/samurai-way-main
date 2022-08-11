import React from "react";

type PropsType = {
    children: JSX.Element | JSX.Element[];
}

export const WithSuspense = (props:PropsType) => {
    return <React.Suspense fallback={<div>Loading...</div>}>
        {props.children}
    </React.Suspense>

}