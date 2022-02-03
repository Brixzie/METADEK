import styled from "styled-components";

// Grid gaps
// Grid tracks
// Fraction size 
// grid-template-rows
// repeat
// grid-template-areas ??
// *** Content ***
// justify-content
// align-content
// fr = fractional is recomended instead of % or px
// what is em unit?
// grid-auto-rows: minmax(100px, auto)
export const GridContainer1 = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-template-columns: 1fr;
  background-color: lightgray;
  padding: 10px;
  // grid-template-columns: repeat(3, 1fr); Means 3 * 1fr
  // grid-template-columns: repeat(3, 2fr 1fr); Means 3 * 2fr 1fr
`;
export const GridContainer = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: lightgray;
  padding: 10px;
  // grid-template-columns: repeat(3, 1fr); Means 3 * 1fr
  // grid-template-columns: repeat(3, 2fr 1fr); Means 3 * 2fr 1fr
`;
export const NestedGridContiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`;

export const Seat = styled.div`
  background-color: lightgreen;
  border: 2px;
  border-radius:5px;
  border-color: white;
  :hover{
    background-color: navajowhite;
  }
`;

export const Room1= styled.div`
  display: grid;
  background-color: #${Math.floor(Math.random()*16777215).toString(16)};
  border: 2px;
  border-style: solid;
  border-radius:5px;
  border-color: white;
  position: center;
`;
export const Room2 = styled.div`
  display: grid;
  background-color: #${Math.floor(Math.random()*16777215).toString(16)};
  border: 2px;
  border-style: solid;
  border-radius:5px;
  border-color: white;
  position: center;
`;