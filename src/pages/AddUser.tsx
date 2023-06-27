import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useLoaderData } from "react-router-dom";
import { Button } from "@mui/material";
import { User } from "../intefaces";

export async function loader() {
  await new Promise((r) => setTimeout(r, 500));
  return "I came from the About.tsx loader function!";
}

export function Component() {
  let data = useLoaderData() as string;
  const [user, setUser] = React.useState<User>();
  const handleOnChange = (e: any) => {};
  React.useEffect(() => {});
  return (
    <div>
      <h2>Add User</h2>
      <div>{data}</div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Name"
            onChange={handleOnChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Name"
          />
        </div>
        <Button>Add</Button>
      </Box>
    </div>
  );
}

Component.displayName = "AddUserPage";
