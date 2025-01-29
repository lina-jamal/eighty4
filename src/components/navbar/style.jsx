import styled from "styled-components";

export const Wrapper = styled.nav`
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
`;

export const LogoBox = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: #fff;

    span {
      font-family: "EB Garamond";
      font-size: 1.5rem;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const SearchBox = styled.label`
  flex: 1;
  display: flex;
  height: 35px;
  border-radius: 18px;
  overflow: hidden;
  border: 0.5px solid #c5c5c5;
  background-color: #e3e1e1;
  max-width: 600px;

  ._icon {
    display: flex;
    width: 44px;
    align-items: center;
    justify-content: center;

    svg {
      color: #fff;
    }
  }

  input {
    flex: 1;
    background-color: transparent;
    outline: none;
    border: none;
    font-family: "Roboto";

    &::placeholder {
      color: #fff;
      opacity: 1; /* Firefox */
    }

    &::-ms-input-placeholder {
      /* Edge 12 -18 */
      color: #fff;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  li {
    a {
      text-decoration: none;
      font-family: "Roboto";
      font-size: 1rem;
      color: #fff;

      &.active {
        color: #fa7436;
        font-weight: bold;
        font-size: 1.1rem;
      }

      &:hover {
        color: #fa7436;
      }
    }
  }
`;
