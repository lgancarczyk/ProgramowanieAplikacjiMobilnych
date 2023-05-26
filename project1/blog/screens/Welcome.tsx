import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import { Text } from "react-native";

const WelcomeContainer = styled(Container)`
background-color: ${colors.secondary};
justify-content: space-between;
width: 100%;
height: 100%;
`;

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light"/>
            <WelcomeContainer></WelcomeContainer>
            <Text>dupa</Text>
        </>
    );
};

export default Welcome;