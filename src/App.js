import { Room1, Room2, GridContainer, GridContainer1,NestedGridContiner, Seat } from "./test.styles";


function App() {

  const seatsRoomOne = 10;
  return (
    <>
    <GridContainer1>
      <Room1>
      <h3>Room 1</h3>
        <NestedGridContiner>
          <Seat onClick={() => alert('Seat reserved')}> 
            <p>Seat 1</p>  
          </Seat>
          <Seat>
            <p>Seat 2</p>  
          </Seat>
          <Seat>
            <p>Seat 3</p>  
          </Seat>
          <Seat>
            <p>Seat 4</p>  
          </Seat>
          <Seat>
            <p>Seat 5</p>  
          </Seat>
          <Seat>
            <p>Seat 6</p>  
          </Seat>
        </NestedGridContiner>
      </Room1>
    </GridContainer1>
    <GridContainer>
      <Room2>
      <h3>Room 2</h3>
        <NestedGridContiner>
          <Seat onClick={() => alert('Seat reserved')}> 
            <p>Seat 1</p>  
          </Seat>
          <Seat>
            <p>Seat 2</p>  
          </Seat>
          <Seat>
            <p>Seat 3</p>  
          </Seat>
          <Seat>
            <p>Seat 4</p>  
          </Seat>
          <Seat>
            <p>Seat 5</p>  
          </Seat>
          <Seat>
            <p>Seat 6</p>  
          </Seat>
        </NestedGridContiner>
      </Room2>
      <Room2>
      <h3>Room 3</h3>
        <NestedGridContiner>
          <Seat onClick={() => alert('Seat reserved')}> 
            <p>Seat 1</p>  
          </Seat>
          <Seat>
            <p>Seat 2</p>  
          </Seat>
          <Seat>
            <p>Seat 3</p>  
          </Seat>
          <Seat>
            <p>Seat 4</p>  
          </Seat>
          <Seat>
            <p>Seat 5</p>  
          </Seat>
          <Seat>
            <p>Seat 6</p>  
          </Seat>
        </NestedGridContiner>
      </Room2>
    </GridContainer>
    </>
  );
}

export default App;
