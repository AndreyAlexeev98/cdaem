const Checkbox = ({name}) => {
  return (
    <div>
      <input type="checkbox" id="checkbox-auth" name={name}/>
      <label for="checkbox-auth" data-onlabel="on" data-offlabel="off" class="checkbox-auth-wrap"></label>
    </div>
  )
}

export default Checkbox;