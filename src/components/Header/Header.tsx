import React, { useState } from "react";

import { useSearch } from "../../hooks/useSearch";

import {
    Content,
    LogoInner,
    Container,
    InnerBar,
    SeacheInput,
    SeacheContainer,
    SeacheButton,
} from "./styled";
import SearchIcon from "@mui/icons-material/Search";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    const { getUser } = useSearch();

    const [searchedValue, setSearchedValue] = useState("");

    const hendleSearch = async () => {
        try {
            await getUser(searchedValue);
        } catch (error) {}
    };
    return (
        <Container>
            <Content>
                <InnerBar>
                    <LogoInner>
                        <a href="/">
                            <h1>Git Search Profile</h1>
                        </a>
                    </LogoInner>

                    <SeacheContainer>
                        <SeacheInput
                            type="text"
                            placeholder="Search Profile"
                            value={searchedValue}
                            onChange={(e) => setSearchedValue(e.target.value)}
                        />
                        <SeacheButton
                            onClick={() => {
                                hendleSearch();
                            }}
                        >
                            <SearchIcon />
                        </SeacheButton>
                    </SeacheContainer>
                </InnerBar>
            </Content>
        </Container>
    );
};

export default Header;
