function ActressCard({list}) {
  return (
    <>
  {
    list.map((actress)=>{
      return(
        
        <div key={actress.id}>
        <h2>{actress.name}</h2>
        <p>{actress.birth_year}</p>
        <p>{actress.nationality}</p>
        <p>{actress.biography}</p>
        <img src={actress.image} alt="" />
        <p>{actress.most_famous_movies}</p>

        </div>
      )
    })
  }
    </>
  )
}
export default ActressCard