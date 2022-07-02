// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      director: "Mark Osborne",
      caste: "Jack Black, Jackie Chen",
      genere: "Action, Comedy",
      name: "Kung Fu Panda",
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      director: "Mark Osborne",
      caste: "Jack Black, Jackie Chen",
      genere: "Action, Comedy",
      name: "Harry Potter",
    },
    {
      id: 3,
      image:
        "https://pics.filmaffinity.com/Narcos_TV_Series-250178857-large.jpg",
      director: "Mark Osborne",
      caste: "Jack Black, Jackie Chen",
      genere: "Action, Comedy",
      name: "Narcos",
    },
  ]);
};
