import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bg="blue" area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
