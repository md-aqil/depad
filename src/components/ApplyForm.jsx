import React from 'react';
import { Row, Col } from 'antd';
import FormOne from "./FormOne";
import { Route ,Switch} from 'react-router';
import FromTwo from './FormTwo';
import FormThree from "./FormThree";
import FormFour from "./FormFour"




function AllPools() {

      return (
       <div className="container padding-top">
            <div className="little-space"></div>
            <h1 className="all-pools-heading">
                all pools - all
            </h1>

            <Switch>
                <Route exact path="/form-presale/">
                    <FormOne />
                </Route>
                <Route path="/form-presale/form-two">
                        <FromTwo/>
                </Route>
                <Route path="/form-presale/form-three">
                        <FormThree/>
                </Route>
                <Route path="/form-presale/form-four">
                        <FormFour/>
                </Route>
            </Switch>
        


       </div>
     )
  
}

export default AllPools;