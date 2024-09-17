import styled from 'styled-components'

export const AnuncioDaVaga = styled.li`
  border: 1px solid ${(props) => props.theme.corPrimaria};
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrimaria};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.corPrimaria};
    color: ${(props) => props.theme.corSecundaria};

    a {
      border-color: ${(props) => props.theme.corPrimaria};
      background-color: ${(props) => props.theme.corSecundaria};
      color: ${(props) => props.theme.corPrimaria};
    }
  }
`

export const TituloDaVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const LinkDaVaga = styled.a`
  border-color: ${(props) => props.theme.corSecundaria};
  background-color: ${(props) => props.theme.corPrimaria};
  color: ${(props) => props.theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
