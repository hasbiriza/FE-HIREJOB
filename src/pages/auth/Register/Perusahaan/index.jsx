import Banner from '@/components/Auth/Banner'
import RegisterFormPerusahaan from '@/components/Auth/RegisterFormPerusahaan'
import React from 'react'

const RegisterPerusahaan = () => {
  return (
    <div className=" container-fluid ">
        <div class="row g-1 mt-2 ">
          <Banner/>

          <RegisterFormPerusahaan/>
        </div>
      </div>
  )
}

export default RegisterPerusahaan