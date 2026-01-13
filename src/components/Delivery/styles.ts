import styled from "styled-components";
import { ModalContainer, Form, Button } from "../../styles/modal";

export { Button };

export const DeliveryContainer = styled(ModalContainer)``

export const FormDelivery = styled(Form)`
    div {
        display: flex;
        gap: 30px;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 0;
        }
    }
`