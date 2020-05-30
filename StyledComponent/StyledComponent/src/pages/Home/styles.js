import styled from 'styled-components/native';

export const Fundo = styled.View`
    background-color: #7259C1;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Titulo = styled.Text`
    color: #DDDD;
    font-size: ${props => `${props.fontSize}`};
`;

export const Texto = styled(Titulo)`

`;