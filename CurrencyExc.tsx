import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { ArrowDownward, ArrowUpward, CompareArrows } from "@mui/icons-material";
import { useEffect, useState } from "react";

export const CurrencyExc = () => {
  const [text, setText] = useState("Enter Some Values");
  const [amount, setAmount] = useState<number>(1);
  const [currency, setCurrency] = useState({});
  const [result, setResult] = useState<any[]>([]);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
      );
      const data = await response.json();
      setCurrency(data);
    } catch (e) {
      console.error(e);
    }
  };

  const currencyExchange = async () => {
    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setResult(data[from][to]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFromChange = (event: { target: { value: string } }) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event: { target: { value: string } }) => {
    setTo(event.target.value);
  };

  const handleAmountChange = (event: { target: { value: any } }) => {
    setAmount(Number(event.target.value));
  };

  const calculate = async () => {
    await currencyExchange();
    console.log(amount);
    setText(`${amount} ${from} = ${result} ${to}`);
  };

  return (
    <Stack
      sx={{
        minHeight: "100svh",
        width: "100%",
        bgcolor: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          minWidth: 300,
          padding: "30px",
          bgcolor: "#ffffff",
          borderRadius: "5px",
        }}
        gap={3}
      >
        <Box sx={{ width: "50px", height: "50px", alignSelf: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/893/893078.png"
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", textTransform: "uppercase" }}
        >
          Currency Converter
        </Typography>

        <TextField
          required
          label="Enter Amount"
          value={amount}
          onChange={handleAmountChange}
        />

        <Stack direction={"row"} alignItems={"center"}>
          <FormControl fullWidth>
            <InputLabel id="from-select-label">From</InputLabel>
            <Select
              labelId="from-select-label"
              value={from}
              label="From"
              onChange={handleFromChange}
              required
            >
              {currency &&
                Object.keys(currency).map((key) => (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <CompareArrows />

          <FormControl fullWidth>
            <InputLabel id="to-select-label">To</InputLabel>
            <Select
              labelId="to-select-label"
              value={to}
              label="To"
              onChange={handleToChange}
              required
            >
              {currency &&
                Object.keys(currency).map((key) => (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Stack>

        <Stack gap={1}>
          <Button variant="contained" onClick={calculate}>
            Get Exchange Rates
          </Button>

          <Button variant="contained" disabled sx={{alignItems: "center", padding: "20px 0px"}}>
            {text} 
            {/* 
            <ArrowDownward sx={{color: "red"}}  /> <ArrowUpward  sx={{color: "green"}} />
            */}
          </Button> 
        </Stack>
      </Stack>
    </Stack>
  );
};
