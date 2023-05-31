import React from "react";
import {
  Button,
  Container,
  Input,
  Row,
  Text,
  Textarea,
} from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";

const ContactUs = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Grid.Container
      css={{ minHeight: "726px", m: "32px 0", bg: "red", p: "0 135px" }}
    >
      <Grid xs={12} sm={6}>
        <Row
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            h: "100%",
          }}
        >
          <Text h2>Did You Find Your</Text>
          <Text h2>Dream Home ?</Text>
          <Text>
            Thank you for getting in touch! if you find your dream home connect
            with us
          </Text>
        </Row>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          <Grid.Container css={{ maxW: "470px", gap: "8px" }}>
            <Grid xs={12} sm={5}>
              <Input fullWidth placeholder="Your Name" />
            </Grid>
            <Grid xs={12} sm={5}>
              <Input fullWidth placeholder="Your Email" />
            </Grid>
            <Grid xs={12} sm={5}>
              <Input fullWidth placeholder="Phone Number" />
            </Grid>
            <Grid xs={12} sm={5}>
              <Box sx={{ minWidth: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Textarea fullWidth placeholder="Menssage" />
            </Grid>
            <Button>Submit</Button>
          </Grid.Container>
        </form>
      </Grid>
    </Grid.Container>
  );
};

export default ContactUs;
