import React from "react";
import { ReadOnlyRating } from "../Rating/Rating";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import SideCatCheckBox from "./SideCatCheckBox";
// import IconStore from "../../store/IconStore";
import { CategorySideSearch } from "../Search/Search";
import RangeSlider from "./RangeSlider";
// import LargeButton from "../Button/LargeButton";

function LeftCatSideNav() {
  const [value, setValue] = React.useState("firstChoice");

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className="sidenav">
      <p>
        <b>CATEGORY</b>
      </p>

      <br />

      <p>{`Phones & Tablets`}</p>
      <div>
        <ul className="cs_section">
          <li>Mobile Phone Accessories</li>
          <br />
          <li>Mobile Phones</li>
          <br />
          <li>Tablet Accessories</li>
          <br />
          <li>Tablets</li>
          <br />
          <li>{`Telephones & Accessories`}</li>
        </ul>
        <hr className="s_hr" />
      </div>
      <br />
      <br />

      <div>
        <p>
          <b> PRODUCT RATING</b>
        </p>

        <div className="cs_section_inner">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="choice"
                name="choice1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="firstChoice"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <ReadOnlyRating size="small" ratingCount={4} />
                      <span className="ratingText">{`& above`} </span>
                    </div>
                  }
                />
                <FormControlLabel
                  value="secondChoice"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <ReadOnlyRating size="small" ratingCount={3} />
                      <span className="ratingText">{`& above`} </span>
                    </div>
                  }
                />
                <FormControlLabel
                  value="thirdChoice"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <ReadOnlyRating size="small" ratingCount={2} />
                      <span className="ratingText">{`& above`} </span>
                    </div>
                  }
                />
                <FormControlLabel
                  value="fourthChoice"
                  control={<Radio />}
                  label={
                    <div className="formgroup__wrap">
                      <ReadOnlyRating size="small" ratingCount={1} />
                      <span className="ratingText">{`& above`} </span>
                    </div>
                  }
                />
              </RadioGroup>
            </FormControl>
        </div>
      </div>

      <hr className="s_hr" />
      <br />
      <br />

      <div className="brend">
        <p>
          <b>BRAND</b>
        </p>
        <br />

        <CategorySideSearch/>

        <SideCatCheckBox productCatName='A1'/>
        <SideCatCheckBox productCatName='AEC'/>
        <SideCatCheckBox productCatName='Amazon'/>
        <SideCatCheckBox productCatName='Anker'/>
        <SideCatCheckBox productCatName='Apple'/>
   
      </div>
      <br />
      <hr className="s_hr" />
      <br />

      <div>

        <RangeSlider rangeSliderName='Price ( ₦ )'/>
        <br/>
        <div>
          <span>
            <input className='rangeSlideInput' placeholder="Minimum" />
          </span>
          <span>
            <input className='rangeSlideInput' placeholder="Maximum" />
          </span>
        </div>



        <br />
        <hr className="s_hr" />
        <br />
        <div className="brend">
          <p>
            <b>OPERATING SYSTEM</b>
          </p>
          <br />

          
        <CategorySideSearch/>

        <SideCatCheckBox productCatName='iOS'/>
        <SideCatCheckBox productCatName='NOKIA OS'/>
        <SideCatCheckBox productCatName='Android'/>
        <SideCatCheckBox productCatName='Blackberry 10 '/>
        <SideCatCheckBox productCatName='BlackberrYears 10'/>
        </div>
        <br />
        <hr className="s_hr" />
        <br />
        <div className="brend">
          <p>
            <b>COLOR</b>
          </p>
          <br />

          <CategorySideSearch/>

        <SideCatCheckBox productCatName='Black'/>
        <SideCatCheckBox productCatName='Blue'/>
        <SideCatCheckBox productCatName='Green'/>
        <SideCatCheckBox productCatName='Grey'/>
        <SideCatCheckBox productCatName='Orange'/>
        </div>
        <br />
        <hr className="s_hr" />
        <br />
        <div className="brend">
          <p>
            <b>HARD DISK (GB)</b>
          </p>
          <br />
          <CategorySideSearch/>

        <SideCatCheckBox productCatName='0'/>
        <SideCatCheckBox productCatName='1'/>
        <SideCatCheckBox productCatName='1GB'/>
        <SideCatCheckBox productCatName='1TB'/>
        <SideCatCheckBox productCatName='2'/>
        </div>
        <br />
        <hr className="s_hr" />
        <br />
      </div>
    </div>
  );
}

export default LeftCatSideNav;
