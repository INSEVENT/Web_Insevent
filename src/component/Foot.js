import React from 'react';
import { MDBFooter,MDBIcon } from 'mdb-react-ui-kit';
import {BsTiktok} from 'react-icons/bs';

export default function Foot() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted Footers'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block Footers'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='Footers'>
          <a href='https://www.instagram.com/inforsa.store/' className='me-4 text-reset'>
            <MDBIcon fas icon="store" />
          </a>
          <a href='https://www.tiktok.com/@inforsa_unmul' className='me-4 text-reset'>
            <BsTiktok style={{marginBottom:'5px'}}/>
          </a>
          <a href='https://www.instagram.com/insevent2022/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://open.spotify.com/show/22ah8JItXjL01kRH8flfXE' className='me-4 text-reset'>
            <MDBIcon fab icon="spotify" />
          </a>
        </div>
      </section>
      <div className='text-center p-4 Footers' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://www.instagram.com/inforsa_unmul/'>
          INFORSA-SI-UNMUL
        </a>
      </div>
    </MDBFooter>
  );
}