import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Box, ListItemButton, Grid, List, ListItem } from "@mui/material";

export default function Home() {
  const [data, setData] = useState([]);
  const [visible, setVisibility] = useState({});

  useEffect(async () => {
    const res = await fetch("/api/movies");
    const data = await res.json();
    console.log("data: ", data);
    setData(data);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <Grid container>
        <Grid className={styles.header} item xs={12}>
          Movie Catlog
        </Grid>
        <Grid item xs={6}>
          <img
            src={visible.image}
            alt="This is Image"
            style={{ width: "100%" }}
          />
          <Box>
            <Box display="flex">
              <Box fontWeight="bold">Name: &nbsp;</Box>
              <Box>{visible.name} </Box>
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
        <Grid item xs={6} className={styles.leftArea}>
          <List>
            {data.map((movie, index) => {
              return (
                <ListItem disablePadding key={index}>
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
