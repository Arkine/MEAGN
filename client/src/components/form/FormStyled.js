import styled from 'styled-components';

export const FormError = styled.div`
    background-color: ${props => props.theme.colors.error};
    padding: 1rem;
    margin-bottom: 1rem;
`;

FormError.Message = styled.div`
    color: #fff;
`;