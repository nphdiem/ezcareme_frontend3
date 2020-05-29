import { createGlobalStyle } from "styled-components";

export const ButtonGlobalStyles = createGlobalStyle`
  .btn {
    cursor: pointer;
    padding: 12px 30px;
    border-radius: 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    &:focus {
      outline: 0;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.9;
    }
  }

  .btn--secondary {
    border: solid 1px var(--black);
    color: var(--black);
    background-color: var(--white);

    &:hover {
      color: var(--bittersweet);
      border-color: var(--bittersweet);
    }
  }

  .btn--primary {
    border-color: transparent;
    color: var(--white);
    background-color: var(--bittersweet);

    &:hover {
      filter: brightness(0.9)
    }
  }

  .btn--disabled {
    pointer-events: none;
    opacity: 0.9;
  }
`;
