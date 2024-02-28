import React from "react";
import { Button, Grid, List } from 'tabler-react';

const NavBar = () => {
  return (
    <>
      <Grid.Col auto={true}>
        <List className="list-inline list-inline-dots mb-0">


        </List>
      </Grid.Col>
      <Grid.Col auto={true}>
        <Button
          href="https://github.com/thefiend/random-draw"
          size="sm"
          outline
          color="primary"
          RootComponent="a"
        >
          Source code
        </Button>
      </Grid.Col>
    </>
  );
};

export default NavBar;
