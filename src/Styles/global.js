import { createGlobalStyle } from "styled-components";
import { Button } from "@material-ui/core";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
	
	:root{
		--color-primary: #FBD10D;
		--color-primary-50: #FCE785;
		--color-secondary: #4D27D9;
		--color-secondary-50: #A592EB;
		--color-gray-100: #111111;
		--color-gray-50: #878787;
		--color-gray-20: #E0E0E0;
		--color-gray-0: #F5F5F5;
		--color-negative: #E60000;
		--color-warning: #FFCD07;
		--color-sucess: #168821;
		--color-information:#155BCB; 
	}
	
	html, body, main, div, section, li, ul, ol, span, header, h1, h2, h3, h4, h5, h6, p, a, button, form, input, img, figure, figcaption, label {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		font-family: 'Montserrat', sans-serif;
	} 
`;

export const PrimaryButton = styled(Button)`
  &.MuiButton-root {
    height: 50px;
    box-shadow: none !important;
    background-color: var(--color-secondary);
    color: #ffff;
    :hover {
      background-color: var(--color-secondary-50);
    }
  }
`;

export const SecondaryButton = styled(Button)`
  &.MuiButton-root {
    height: 50px;
    box-shadow: none !important;
    background-color: var(--color-gray-0);
    color: var(--color-gray-20);
    :hover {
      background-color: var(--color-gray-20);
      color: var(--color-gray-50);
    }
  }
`;
