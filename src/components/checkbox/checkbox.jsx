const Checkbox = ({name}) => {
  return (
    <div>
      <input type="checkbox" id="checkbox-auth" name={name}/>
      <label htmlFor="checkbox-auth" data-onlabel="on" data-offlabel="off" className="checkbox-auth-wrap"></label>
    </div>
  )
}

export default Checkbox;