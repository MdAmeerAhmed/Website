import React from 'react'
import ServiceCard from './ServiceCard'
function WhoAre
() {
  return (
    <>
    <div className='w-100 h-75 bg-white d-flex'>
        <div  style={{padding:"50px",margin:"0"}} >
        <h1 className='px-5'>Who Are We</h1>
        <p className='me-5 px-5'>For over 20 years, Rounak Computers LLC has been a trusted provider of IT sales and services in Dubai, recognized as a Microsoft Gold Partner in Cloud Productivity. We have built a solid reputation by offering a wide range of services, including structured cabling, CCTV, Managed IT Services, Onsite support, and AMC services for critical IT infrastructure. We also provide rental solutions for PCs, laptops, and projectors for events. Many of our clients have been with us since the beginning, and we pride ourselves on addressing every customer's needs, no matter the size of the deal, across sectors like healthcare, education, government, manufacturing, and more. We only procure products from authorized distributors, maintaining strong partnerships with leading brands like Microsoft, HP, Dell, Lenovo, and Sophos. Since 2014, we have expanded into cloud services, offering solutions like Microsoft Office 365, Azure, and seamless migrations with zero downtime. Our certified team of professionals is continuously trained to deliver cutting-edge IT solutions, ensuring that we meet the evolving needs of our clients.</p>
        </div>
        <div className='m-5 p-2 d-flex ' >
            <img src="./img/img4.png" alt="who we are" className='me-5 pe-2 ' style={{ objectFit: "cover", height: "400px", padding:"20px" }} />
        </div>
    </div>
    <div className='w-100 d-flex' style={{ height: "300px",
      backgroundImage: "linear-gradient(to right, rgb(32, 4, 81), rgb(58, 68, 247))" 
    }} >
        <div className='p-5 text-white gap-4'>
        <h1 className='px-5'>What We Do</h1>
        <p className='px-5'>As a certified Microsoft Cloud Partner, Rounak Computers offers expert solutions for migrating, implementing, and managing your business in the cloud. Our deep expertise in Microsoft technologies like Office 365, Azure, and Dynamics 365 ensures seamless integration, enhanced productivity, and secure cloud operations. Let us help you unlock the full potential of Microsoft's cloud services to drive efficiency and growth for your business.</p>
        </div>   
         <div className="m-5 d-flex justify-content-start gap-5">
            {/* First Image */}
            <img src="./img/microsoft.png" className="rounded h-75 p-1 mt-4 ms-1 " alt="microsoft" />
            
            {/* Second Image with Text */}
            <div className="me-5 p-4 gap-1">
                <h6 className="text-white fw-bold">Find Us in SAP</h6>
                <img src="./img/img5.webp" className="rounded h-75 " alt="microsoft" />
            </div>
            </div>
    </div>
        <ServiceCard />
    </>
  )
}

export default WhoAre

