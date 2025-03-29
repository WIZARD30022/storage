export default function Page({ params }) {

    console.log(params.val);

    return <div>My Post: {params.val}</div>
}