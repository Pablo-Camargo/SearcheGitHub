import React, { useEffect, useState } from "react";
import { RepoCard, Container, TitleContent, CardContent } from "./style";

import { getAllCommits } from "../../hooks/getAllCommits";
import { CommitsInner } from "../../hooks/interfaces/CommitsInner";
import { useParams } from "react-router-dom";

interface RepoDetailsProps {}

const RepoDetails: React.FC<RepoDetailsProps> = () => {
    const { repoName, loginName } = useParams();

    const [comit, setRepositories] = useState<CommitsInner[]>([]);

    const full_name = `${loginName}/${repoName}`;

    useEffect(() => {
        if (!full_name) return;
        getAllCommits(full_name).then((resp) => setRepositories(resp));
    }, [full_name]);

    return (
        <Container>
            <TitleContent>
                <h1>Commits</h1>
            </TitleContent>

            {comit.map((a) => {
                console.log(a);
                return (
                    <RepoCard key={a.committer.id}>
                        <CardContent>
                            <h5>autor</h5>
                            <span>{a.commit.author.name}</span>
                        </CardContent>
                        <CardContent>
                            <h5>mensagem</h5>
                            <span>{a.commit.message}</span>
                        </CardContent>
                        <CardContent>
                            <h5>data de criação</h5>
                            <span>{a.commit.author.date.toString()}</span>
                        </CardContent>
                    </RepoCard>
                );
            })}
        </Container>
    );
};

export default RepoDetails;
