import React, { useEffect, useState } from "react";
import { RepoCard, Container, TitleContent, CardContent } from "./styled";

import { useParams, useNavigate } from "react-router-dom";
import {
    Grid,
    Badge,
    Button,
    CardActions,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { listRepos } from "../../hooks/getUserRepo";
import { UserDetailsRepo } from "../../hooks/interfaces/UserDetailtRepo";

interface ReposProps {}

const Repos: React.FC<ReposProps> = () => {
    const { name } = useParams();
    const [repos, setRepos] = useState<UserDetailsRepo[]>([]);
    const history = useNavigate();

    useEffect(() => {
        if (!name) return;
        listRepos(name).then((resp) => setRepos(resp));
    }, [name]);

    function hendleClick(repoName: string, loginName: string) {
        history(`/${loginName}/commits/repo/${repoName}`);
    }

    return (
        <Container>
            <TitleContent>
                <h1>Repositorios</h1>
            </TitleContent>
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 1, md: 8 }}
            >
                {repos?.map((a) => {
                    console.log(a);
                    return (
                        <Grid item xs={9} sm={4} md={4} key={a.name}>
                            <RepoCard
                                onClick={() =>
                                    hendleClick(a.name, a.owner.login)
                                }
                            >
                                <CardContent>
                                    <div>
                                        <h5>{a.name}</h5>

                                        <span>{a.description}</span>
                                    </div>
                                    <div>
                                        <Badge
                                            badgeContent={
                                                a.stargazers_count
                                                    ? a.stargazers_count
                                                    : "0"
                                            }
                                            color="primary"
                                        >
                                            <StarIcon />
                                        </Badge>
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <a rel="stylesheet" href={a.clone_url}>
                                        <Button size="small">Clone</Button>
                                    </a>
                                </CardActions>
                            </RepoCard>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default Repos;
