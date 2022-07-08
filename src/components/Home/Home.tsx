import React, { useState, useContext } from "react";

import { listUsers } from "../../hooks/getUserDetails";

import { UserDetails } from "../../hooks/interfaces/UserDetails";
import {
    Header,
    LogoInner,
    Container,
    InnerBar,
    SeacheInput,
    SeacheContainer,
    SeacheButton,
    InnerCard,
    BotCard,
    TopoCard,
    MidCard,
} from "./styled";
import UserNumber from "../UserNumbers/UserNumber";

import SearchIcon from "@mui/icons-material/Search";
import { Box, Paper, Avatar, Typography } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const ctx = useContext(UserContext);
    console.log(ctx);
    const [data, setData] = useState<UserDetails | null>(null);
    const [searchedValue, setSearchedValue] = useState("");

    const teste = (name: string) => {
        const n = name;

        listUsers(n).then((resp) => setData(resp));
    };
    return (
        <>
            <Header>
                <Container>
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
                                onChange={(e) =>
                                    setSearchedValue(e.target.value)
                                }
                            />
                            <SeacheButton
                                onClick={() => {
                                    teste(searchedValue);
                                }}
                            >
                                <SearchIcon />
                            </SeacheButton>
                        </SeacheContainer>
                    </InnerBar>
                </Container>
            </Header>

            <Container>
                <Box
                    sx={{
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "spaceAround",

                        display: "flex",
                        "& > :not(style)": {
                            mt: 5,

                            height: 500,
                            display: "flex",
                            justifyContent: "spaceAround !important",
                            flexDirection: "column",
                        },
                    }}
                >
                    <Paper
                        sx={{
                            backgroundColor: "rgb(18,18,18)",
                            boxShadow: "7px 4px 5px #0000004d",
                            border: "1px solid #242121 !important",
                            color: "#fff",
                            
                        }}
                    >
                        <InnerCard>
                            <TopoCard>
                                <Avatar
                                    alt={data?.avatar_url}
                                    src={data?.avatar_url}
                                    sx={{ width: 100, height: 100 }}
                                />
                                <Typography variant="h6" component="span">
                                    {data?.login}
                                </Typography>
                            </TopoCard>
                            <MidCard>
                                <Typography variant="h3">
                                    {data?.name}
                                </Typography>
                            </MidCard>
                            <BotCard>
                                <UserNumber
                                    public_repos={data?.public_repos}
                                    followers={data?.followers}
                                    following={data?.following}
                                    name={data?.login}
                                />
                            </BotCard>
                        </InnerCard>
                    </Paper>
                </Box>
            </Container>
        </>
    );
};

export default Home;
