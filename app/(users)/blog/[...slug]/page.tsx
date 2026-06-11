
const BlogDetail = async(props:any) => {
    const { slug }=await props.params;

  return (
    <div>Blog Details:

        <div>ID:{slug[0]}</div>
        <div>Title:{slug[1]}</div>
    </div>
  )
}

export default BlogDetail