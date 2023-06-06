import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Loading,
  Row,
  Text,
  Textarea,
} from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { toast } from "react-toastify";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { appApi } from "@/apis";
import { useFormik } from "formik";
import * as Yup from "yup";
const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      menssage: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Ingrese un email válido")
        .required("Ingrese un email")
        .max(255),
      name: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Ingrese un nombre válido")
        .max(40)
        .required("Ingrese su nombre y apellido"),
      phone: Yup.string(),
      menssage: Yup.string(),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      const initValues = {
        name: "Melvin",
        email: ["info@gmacinvestment.com", "gmacpuertorico@gmail.com"],
        subject: "Nueva consulta",
        message: `Has recibido una nueva consulta de ${values.name}, te puedes comunicar al email: ${values.email} o al teléfono:${values.phone}. La consulta es: ${values.menssage}`,
      };
      try {
        await appApi.post("/email/contact", initValues).then((res: any) => {
          console.log("responder email", res);
          formik.resetForm();
          toast("Email enviado");
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        toast("No se pudo enviar el email");
        setLoading(false);
      }
    },
  });

  return (
    <Grid.Container
      css={{
        minHeight: "726px",
        m: "32px 0px 0px 0px",
        backgroundRepeat: "no-repeat",
        p: "0 135px",
        backgroundImage: "url('/assets/icons/bg-contactus.png')",
        backgroundSize: "cover",
        "@mdMax": {
          p: "0 10px",
        },
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
          <Text h2 size={"$2xl"} className="text-contact-title white">
            Queremos saber de tí
          </Text>
          <Text h2 size={"$2xl"} className="text-contact-title gold">
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
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <Grid.Container gap={1} css={{ maxW: "470px" }}>
            <Grid xs={12} sm={6}>
              <Input
                fullWidth
                placeholder="Nombre"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <Input
                fullWidth
                placeholder="Correo electrónico"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                fullWidth
                placeholder="Teléfono"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>

            <Grid xs={12}>
              <Textarea
                fullWidth
                placeholder="Mensaje"
                name="menssage"
                value={formik.values.menssage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Button
              type="submit"
              css={{ mt: "12px", "@mdMax": { w: "100%" } }}
              disabled={loading}
            >
              Enviar {loading && <Loading size={"sm"} />}
            </Button>
          </Grid.Container>
        </form>
      </Grid>
    </Grid.Container>
  );
};

export default ContactUs;
