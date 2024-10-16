import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Stack from '@mui/joy/Stack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Typography from '@mui/joy/Typography';
import Autocomplete from '@mui/joy/Autocomplete';

const top100Films = [
  { label: 'Diani, Kenya', year: 1994 },
  { label: 'Kilifi, Kenya', year: 1972 },
  { label: 'Mombasa, Kenya', year: 1974 },
  { label: 'Embu, Kenya', year: 2008 },
  { label: 'Kisumu, Kenya', year: 1957 },
  { label: "Narok, Kenya", year: 1993 },
  { label: 'Malindi, Kenya', year: 1994 },
  {
    label: 'Serengeti, Kenya',
    year: 2003,
  },
  { label: 'Nairobi, Kenya', year: 1966 },
  { label: 'Kitale', year: 1999 },
  {
    label: 'Abadare, Kenya',
    year: 2001,
  },
]

export default function Search() {
  const [address,setAddress] = React.useState<any>("Diani, Kenya");
  const options = top100Films.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  return (
    <div>
      <Stack spacing={1} direction="row" sx={{ mb: 2 }}>
        <FormControl sx={{ flex: 1 }}>
          <Autocomplete
            variant="soft"
            placeholder="Search"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            // groupBy={(option) => option.firstLetter}
            onChange={(option,event) => {
               setAddress(event?.label)
            }
            }
            getOptionLabel={(option) => option.label}
            startDecorator={<SearchRoundedIcon />}
          />
        </FormControl>
        <Button variant="solid" color="primary">
          Search
        </Button>
      </Stack>
      <Typography level="body-sm">232 stays in {address}</Typography>
    </div>
  );
}