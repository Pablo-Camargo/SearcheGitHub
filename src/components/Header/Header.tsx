import React, { useState } from "react";

import { useSearch } from "../../hooks/useSearch";
import { toast } from "react-toastify";
import axios from "axios";

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
    const [err, setError] = useState(null);

    const [searchedValue, setSearchedValue] = useState("");

    const hendleSearch = async () => {
        try {
            await getUser(searchedValue);
            toast.dark(`${searchedValue} encontrado!`);
        } catch (error) {
            axios.interceptors.response.use(undefined, (error) => {
                if (error.response.status === 404) {
                    toast.dark(
                        `404 Ops, não achei ninguem com esse nome ${searchedValue}. 😔`
                    );
                }
                if (error.response.status === 403) {
                    toast.dark(`403  Parece que você nao tem permissao. 😞`);
                }
                if (error.response.status === 500) {
                    toast.dark(` 500 ¡Ay, caramba! 💻`);
                }
                if (error.response.status === 503) {
                    toast.dark(`503 Foi mal. 🔌`);
                }
            });
        }
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
