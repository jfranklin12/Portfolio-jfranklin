import '../../App.css';
import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import meFooter from '../../images/meFooter.jpg';

function Footer() {
  return (
    <CDBFooter className="shadow" id="footer">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '82%' }}
      >
        <CDBBox display="flex" alignItems="center">
          
            <img
              id='footerPicture'
              alt="Julian Franklin"
              src={meFooter}
            />
            <span className="ml-4 h5 mb-0 font-weight-bold" id="footerName">Julian Franklin</span>
          
        </CDBBox>
        <CDBBox>
          <small className="ml-2" id='copyright'>&copy; Julian Franklin, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2 footerLink">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2 footerLink">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2 footerLink">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>

  );
}

export default Footer;