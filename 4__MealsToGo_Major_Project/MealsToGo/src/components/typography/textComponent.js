import React from "react";
import styled from "styled-components/native";

// styled-components
const DefaultTextStyles = styled.View`
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    color: ${(props) => props.theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Body = styled.View`
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Hint = styled.View`
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Error = styled.View`
    color: ${(props) => props.theme.colors.text.error};
`;

const Caption = styled.View`
    font-size: ${(props) => props.theme.fontSizes.caption};
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Label = styled.View`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const Text = ( { variant }) => {

    if(variant === "label") {

        return (
            <>
                <DefaultTextStyles />
                <Label />
            </>
        )

    }

    if(variant === "caption") {

        return (
            <>
                <DefaultTextStyles />
                <Caption />
            </>
        )    
    }

    if(variant === "error") {

        return (
            <>
                <DefaultTextStyles />
                <Error />
            </>
        )  
    }

    if(variant === "hint") {
       
        return (
            <>
                <DefaultTextStyles />
                <Hint />
            </>
        )   
    }

    return <Body />;
}