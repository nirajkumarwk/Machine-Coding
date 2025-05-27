const ProductCard= ({image,title})=>{
  return (
    <div className='card'>
      <img src={image} style={{width: '100px', height: '100px'}} />
      <p>{title}</p>
    </div>
  )
}
export default ProductCard