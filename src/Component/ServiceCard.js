import React from 'react'

function ServiceCard() {
    const cards = [
        { title: "Structured Cabling", img: "./img/card/img1.png" },
        { title: "IT AMC Services", img: "./img/card/img2.png" },
        { title: "Managed IT Services", img: "./img/card/img3.png" },
        { title: "SPLA", img: "./img/card/img4.png" },
        { title: "Structured Cabling ", img: "./img/card/img5.png" },
        { title: "Expert IT Support", img: "./img/card/img6.png" },
        { title: "IT Managed Services", img: "./img/card/img7.png" },
        { title: "Advanced Website & Apps", img: "./img/card/img8.png" },
      ];
  return (
    <div className='bg-light py-5 '>
        <div className='text-center'>
            <h2>Comprehensive IT Services for Seamless Operations</h2>
            <p>From structured cabling to managed IT services, we provide expert support to ensure your business runs smoothly.</p>
        </div>
        <div className="container mt-4 " style={{ maxHeight: "100vh", overflowY: "auto"}} >
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className="card shadow " style={{ width: "18rem",backgroundColor:"#270ee0" }}>
              <img
                src={card.img}
                className="card-img-top mt-2"
                alt={card.title}
                style={{ cursor: "pointer",borderRadius: "0" }} 
              />
              <div className="card-body">
                <h6 className="card-title text-center text-white" style={{ cursor: "pointer",margin: "0", padding: "2px", fontSize: "14px" }}>
                  {card.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default ServiceCard