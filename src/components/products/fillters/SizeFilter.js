import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const SizeFilter = ({selectedSizes, setSelectedSizes}) => {
  const [sizes, setSizes] = useState(null);

  useEffect(() => {
    getSizes();
  }, []);

  const getSizes = async () => {
    const url = `https://e-commerce-api.belzaondrej.com/products/sizes`;
    try {
      let response = await axios.get(url);
      setSizes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSizeFilterChange = (val) => {
    setSelectedSizes(val);
  }

  return (
    <>
    <ToggleButtonGroup className="mb-3" type="checkbox" value={selectedSizes} onChange={handleSizeFilterChange}>
          {sizes &&
            sizes.map((s) => {
              return (
                <ToggleButton
                  key={s}
                  id={`size-${s}`}
                  variant="outline-dark"
                  className="rounded me-1"
                  name="size"
                  value={s}
                >
                  {s}
                </ToggleButton>
              );
            })}
        </ToggleButtonGroup>
    </>
  );
};

export default SizeFilter;
