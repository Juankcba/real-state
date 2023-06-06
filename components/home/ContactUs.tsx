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
      css={{
        minHeight: "726px",
        m: "32px 0px 0px 0px",
        backgroundRepeat: "no-repeat",
        p: "0 135px",
        backgroundImage: "url('/assets/icons/bg-contactus.png')",
        backgroundSize: "cover",
      }}
    >
      <Grid xs={12} sm={7}>
        <Row
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            h: "100%",
          }}
        >
          <Text h2 className="text-contact-title white">
            Queremos saber de tí
          </Text>
          <Text h2 className="text-contact-title gold">
            Contactanos
          </Text>
          <Text>
            Gracias por confiar en nosotros, puedes contactarnos via email
          </Text>
        </Row>
      </Grid>
      <Grid
        xs={12}
        sm={5}
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          <Grid.Container gap={1} css={{ maxW: "470px" }}>
            <Grid xs={12} sm={6}>
              <Input fullWidth placeholder="Your Name" />
            </Grid>
            <Grid xs={12} sm={6}>
              <Input fullWidth placeholder="Your Email" />
            </Grid>
            <Grid xs={12}>
              <Input fullWidth placeholder="Phone Number" />
            </Grid>

            <Grid xs={12}>
              <Textarea fullWidth placeholder="Menssage" />
            </Grid>
            <Button css={{ mt: "12px" }}>Submit</Button>
          </Grid.Container>
        </form>
      </Grid>
    </Grid.Container>
  );
};

export default ContactUs;
