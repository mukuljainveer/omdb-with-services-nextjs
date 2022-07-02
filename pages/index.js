import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, ListItemButton, Grid, List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // MuiListItemButton-
  root: {
    "&$selected": {
      backgroundColor: "red",
    },
  },
  selected: {},
}));

export default function Home() {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const [visible, setVisibility] = useState({
    id: 1,
    image:
      "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    director: "Mark Osborne",
    caste: "Jack Black, Jackie Chen",
    genere: "Action, Comedy",
    name: "Kung Fu Panda",
  });

  useEffect(async () => {
    const res = await fetch("/api/movies");
    const data = await res.json();
    console.log("data: ", data);
    setData(data);
  }, []);

  return (
    <>
      <Head>
        <title>Movie List | Home</title>
      </Head>
      <Grid container style={{ border: "1px solid black" }}>
        <Grid className={styles.header} item xs={12}>
          Movie Catalogue
        </Grid>
        <Grid item md={6} xs={12} padding="10px">
          <img
            src={visible.image}
            alt="This is Image"
            style={{ width: "100%" }}
          />
          <Box display="flex" alignItems="center" flexDirection="column">
            <Box
              display="flex"
              data-testid="movie-name"
              fontSize="22px"
              fontWeight="bold"
            >
              {visible.name}
            </Box>
            <Box display="flex">
              <Box fontWeight="bold">Director: &nbsp;</Box>
              <Box>{visible.director} </Box>
            </Box>
            <Box display="flex">
              <Box fontWeight="bold">Caste: &nbsp;</Box>
              <Box>{visible.caste} </Box>
            </Box>
            <Box display="flex">
              <Box fontWeight="bold">Genere: &nbsp;</Box>
              <Box>{visible.genere} </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} className={styles.leftArea}>
          <List>
            {data.map((movie, index) => {
              return (
                <ListItem
                  classes={{ root: classes.root, selected: classes.selected }}
                  selected={visible.id == movie.id}
                  disablePadding
                  key={index}
                >
                  <ListItemButton
                    selected={movie.id == visible.id}
                    onClick={() => {
                      setVisibility(movie);
                    }}
                    style={{
                      display: "block",
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {movie.name}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
}
