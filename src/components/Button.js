import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    // Passing props to styled component, rel add to cart in details
    border-color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color:var(--mainBlue);
    }
    &: focus{
        outline:none;
    }
`;

// This Component can be reused. React <3
// Cut pasted from Navbar.js, eporting as a component 

// export default styled.button`
//     text-transform: capitalize;
//     font-size: 1.4rem;
//     background: transparent;
//     border: 0.05rem solid var(--lightBlue);
//     color: var(--lightBlue);
//     border-radius: 0.5rem;
//     padding: 0.2rem 0.5rem;
//     cursor:pointer;
//     margin:0.2rem 0.5rem 0.2rem 0;
//     transition:all 0.5s ease-in-out;
//     &:hover{
//         background:var(--lightBlue);
//         color:var(--mainBlue);
//     }
//     &: focus{
//         outline:none;
//     }
// `;

// transition: properties, timing, type; &: hover{} &: focus{} ===> from sass, like "and" operator