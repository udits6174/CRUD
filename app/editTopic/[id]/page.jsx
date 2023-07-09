import EditTopicForm from '@/components/EditTopicForm'
const baseURL = "http://localhost:3000/";
const getTopicByID = async(id)=>{
  try{
    const res = await fetch(`${baseURL}api/topics/${id}`,{
      cache: "no-store"
    });
    if(!res.ok){
      throw new Error("failed to fetch topic");
    }
    return res.json();
  }catch(error){
    console.log(error);
  }
}
const EditTopic = async({params}) => {
  const {id} = params;
  const topic = await getTopicByID(id);
  const {title, description} = topic;
  return (
    <EditTopicForm id={id} OgTitle={title} OgDescription={description}/>
  )
}

export default EditTopic