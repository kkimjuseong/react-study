import React from 'react';
import MainNavigation from "../layout/MainNavigation";

const ErrorPage = () => {
    return (
        <>
            <MainNavigation/>
            <main>
                <h1>페이지를 찾을 수 없습니다.</h1>
                <p>요청하신 페이지의 주소를 다시 확인해 주세요.</p>
            </main>
        </>
    );
};

export default ErrorPage;