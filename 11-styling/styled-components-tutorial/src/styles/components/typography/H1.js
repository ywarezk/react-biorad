import styled from 'styled-components';

// <H1 isBig={false} />
const H1 = styled.h1`
    text-decoration: underline;
    color: red;
    font-size: ${(props) => props.isBig ? '40px' : '20px'}
`;

export default H1;