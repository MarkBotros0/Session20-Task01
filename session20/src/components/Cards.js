import React from 'react'

const Cards = ({ data, addFilter }) => {

  const handleFilterCLick = (e) => {
    addFilter(e.target.innerText)
  }

  return (
    <div className='row'>
      <ul className="col-12 m-0" id="job-list">
        {data.map((card) => (
          <li key={card.id} className={card.featured && card.new ? "job-card new featured" : card.new ? "job-card new" : card.featured ? "job-card featured" : "job-card"}>
            <div className="job-card__info">
              <div className="d-md-flex align-items-center">
                <div className="img-c">
                  <img src={card.img} alt='img' />
                </div>
                <div className='w-100'>
                  <div className="d-flex align-items-center">
                    <p>{card.title}</p>
                    {card.new ? <p className="tag-new">New!</p> : null}
                    {card.featured ? <p className="tag-featured rounded-pill">Featured</p> : null}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <h6>{card.position}</h6>
                    <ul className=" tags">{
                      card.filters.map((filter) => (
                        <li key={filter} onClick={handleFilterCLick}>{filter}</li>
                      ))}
                    </ul>
                  </div>
                  <ul className="details">
                    <li className="pl-0">{card.createdOn}</li>
                    <li>{card.enrollment}</li>
                    <li>{card.place}</li>
                  </ul>

                  <p style={{ color: "#939c9b", fontSize: "12px", fontWeight: "normal" }}>{card.desc}</p>
                </div>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cards