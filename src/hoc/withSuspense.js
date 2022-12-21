import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspence fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspence>
    };
}