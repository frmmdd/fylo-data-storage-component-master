const CardOne = () => {
  return (
    <div
      className="card-one columns is-multiline m-0 p-6"
      style={{ maxWidth: "22em" }}
    >
      <img className="column is-full" src="logo.svg" alt="logo" />
      <div className="columns is-flex is-full m-0">
        <img className="column has-background-black box m-1" src="icon-document.svg" alt="document" />
        <img className="column has-background-black box m-1" src="icon-folder.svg" alt="folder" />
        <img className="column has-background-black box m-1" src="icon-upload.svg" alt="upload" />
      </div>
    </div  >
  )
}

export default CardOne