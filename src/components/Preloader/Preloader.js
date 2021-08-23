import React from "react";
import ContentLoader from "react-content-loader";

const Preloader = () => {
    return (
        <ContentLoader
            speed={2}
            width={160}
            height={165}
            viewBox="20 0 150 150"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="1" y="0" rx="0" ry="0" width="160" height="58"/>
            <rect x="1" y="68" rx="0" ry="0" width="113" height="9"/>
            <rect x="1" y="84" rx="0" ry="0" width="82" height="8"/>
            <rect x="1" y="102" rx="10" ry="10" width="68" height="11"/>
            <rect x="111" y="92" rx="9" ry="9" width="35" height="23"/>
        </ContentLoader>
    )
}

export default Preloader