/* eslint-disable react/prop-types */
function GenerateGeneralInfo({name, email, phoneNumber, location}) {
  return (
    <section className='general-info'>
      <h1>{name}</h1>
      <div className="details">
        <p className="email">{email}</p>
        <p className="phone-number">{phoneNumber}</p>
        <p className="location">{location}</p>
      </div>
    </section>
  );
}

function GenerateEducationInfo({educationInfo}) {
  return (
    <section className='education-info'>
      <h2>Education Experience</h2>
      <hr />
      <ul className="education-list">
        {
          educationInfo.map((info, index) => {
            return (
              <li key={index}>
                <p className="timeframe">{(info.dateStart).slice(0, 7)} ~ {(info.dateEnd).slice(0, 7)}</p>
                <div className="details">
                  <h3>{info.degree}</h3>
                  <p className="school-name"><i>{info.schoolName}</i></p>
                  <p className="field-of-study">{info.fieldOfStudy}</p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

function GeneratePracticalInfo({practicalInfo}) {
  return (
    <section className='practical-info'>
      <h2>Practical Experience</h2>
      <hr />
      <ul className="practical-list">
        {
          practicalInfo.map((info, index) => {
            return (
              <li key={index}>
                <p className="timeframe">{(info.dateStart).slice(0, 7)} ~ {(info.dateEnd).slice(0, 7)}</p>
                <div className="details">
                  <h3>{info.title}</h3>
                  <p className="company-name"><i>{info.companyName}</i></p>
                  <p className="responsibility">{info.responsibility}</p>
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default function GenerateCV({cvInfo}) {
  return (
    <>
      <GenerateGeneralInfo
        {...cvInfo.generalInfo}
      />

      <GenerateEducationInfo 
        educationInfo={cvInfo.educationInfo}
      />

      <GeneratePracticalInfo 
        practicalInfo={cvInfo.practicalInfo}
      />
    </>
  );
}