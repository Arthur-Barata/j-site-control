



function Form(){
    return( 
    <div className="inputField">
      <form>
      
        <input className="input"id="nome" type="text" placeholder="Nome completo"></input>
        <input className="input" id="nome" type="tel" placeholder="WhatsApp"></input>
        <select name="municipio" onChange={manda}>
          <option val="mao">Manaus</option>
          <option val="mao">Manaus</option>
          <option val="mao">Manaus</option>
          <option val="iti">itacoatiara</option>
          <option val="tef">tefe</option>
          <option val="mao">Manaus</option>
          <option val="mao">Manaus</option> 
          <option val="mao">Manaus</option>
        </select>
      </form>
      </div> )
  }