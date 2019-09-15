const Password = (props) => (
  <div className="container">
    <div className="card">
      <div className="card-content">
        <p className="title has-text-centered">
          {/*Adjective*/}
          {props.adjective}

          {/*Noun*/}
          {props.noun}

          {/*Number*/}
          {props.numberToggle ? Math.round(Math.random() * 99) : ''}

          {/*Special Character*/}
          {props.specialToggle ? props.special : ''}
        </p>
        <p className="button is-fullwidth is-primary is-large" onClick={() => {props.handleGenerate()}}>
          Generate
        </p>
      </div>
    </div>
  </div>
);

export default Password;