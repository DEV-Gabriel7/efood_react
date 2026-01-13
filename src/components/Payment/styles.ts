import styled from "styled-components";
import { ModalContainer, Form, Button } from "../../styles/modal";

export { Button };

export const PaymentContainer = styled(ModalContainer)``

export const FormPayment = styled(Form)`
    .card-details,
    .expiration {
        display: flex;
        gap: 30px;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 0;
        }
    }
`