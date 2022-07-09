import React from "react";
import { NumberContainer, InnerNumberContainer, Margin, Span } from "./styled";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

interface UserNumberProps {
    public_repos: number | undefined;
    following: number | undefined;
    followers: number | undefined;
    name: string | undefined;
}

const UserNumber: React.FC<UserNumberProps> = (props: UserNumberProps) => {
    const history = useNavigate();

    function hendleClick(name: string) {
        history(`/${name}/repos`);
        toast.dark("Repositórios! 📕");
    }
    function followersClick() {
        toast.dark("já estamos trabalhando nisto! 👨‍💻");
    }
    return (
        <NumberContainer>
            <InnerNumberContainer onClick={() => followersClick()}>
                <Margin>{props.followers}</Margin>
                <Span>Seguidores</Span>
            </InnerNumberContainer>

            <InnerNumberContainer onClick={() => hendleClick(`${props.name}`)}>
                <Margin>{props.public_repos}</Margin>
                <Span>Repositórios</Span>
            </InnerNumberContainer>

            <InnerNumberContainer onClick={() => followersClick()}>
                <Margin>{props.following}</Margin>
                <Span>Seguindo</Span>
            </InnerNumberContainer>
        </NumberContainer>
    );
};

export default UserNumber;
