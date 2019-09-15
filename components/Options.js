const Options = (props) => (
  <section className="section">
    <div className="container">
      <form>
        <div className="field" onClick={() => {props.parentCallback({specialToggle: !props.special, numberToggle: props.number})}}>
          <input type="checkbox" className="switch" checked={props.special ? "checked": "" } />
          <label>Special character</label>
        </div>
        <div className="field" onClick={()=>{props.parentCallback({specialToggle: props.special, numberToggle: !props.number})}}>
          <input type="checkbox" className="switch" checked={props.number ? "checked" : "" } />
          <label>Number</label>
        </div>
      </form>
    </div>
  </section>
);

export default Options;