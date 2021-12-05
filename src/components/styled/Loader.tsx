import styled from 'styled-components';
import {colors} from "../../constants/colors";


export const Loader = styled.div`
  border: 16px solid ${colors.lightGray}; 
  border-top: 16px solid ${colors.blue}; 
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    } 
  }
`;