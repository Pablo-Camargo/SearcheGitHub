import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Header />
            <Card />
        </>
    );
};

export default Home;
