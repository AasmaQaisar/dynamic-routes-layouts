

export default async function Product({params}:{params:{product:string}}){


    // const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
    // const res = await fetchData.json()
    // console.log(res)
    return (
        <>
        <h3>Products Details</h3>


        {/* <p>{res.id}</p>
        <p>{res.title}</p>
        <p>{res.body}</p> */}
        </>
        
    );
    }