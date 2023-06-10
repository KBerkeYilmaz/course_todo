import styled from 'styled-components';

const Button = styled.button `
    font: inherit;
    width: 15rem;
    height: 2.5rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid #b91c1c;
    border-radius: 5px;
    color: rgb(226 232 240);
    background: #b91c1c;
    box-shadow: 0 0 4px rgba(0,0,0,0.26);
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover,
    &:active {
        background: #dc2626;
        borderColor: #dc2626;
        box-shadow: 0 0 8px rgba(0,0,0,0.26);
    }
`;

export default Button; 