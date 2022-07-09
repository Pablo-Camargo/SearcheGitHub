import React from "react";

import { Container, InnerCard, BotCard, TopoCard, MidCard } from "./styled";
import UserNumber from "../UserNumbers/UserNumber";

import { useSearch } from "../../hooks/useSearch";

import { Box, Paper, Avatar, Typography } from "@mui/material";

interface CardProps {}

const Card: React.FC<CardProps> = () => {
    const { data } = useSearch();
    const extData = Object.keys(data).length;
    return extData > 0 ? (
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
                            <Typography variant="h3">{data?.name}</Typography>
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
    ) : (
        <Container>
            {" "}
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
                            <Typography variant="h5" component="span">
                                Para usar basta pesquisar o nome que deseja
                            </Typography>
                        </TopoCard>
                    </InnerCard>
                </Paper>
            </Box>
        </Container>
    );
};

export default Card;
