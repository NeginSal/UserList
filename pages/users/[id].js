export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(user => {
      return {
        params: { id: user.id.toString() }
      }
    })

    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
      props: { user: data }
    }
  }

  const Details = ({ user }) => {
    return (
      <div>
        <h1>User id : { user.id }</h1>
        <p>title : { user.title }</p>
        <p>body : { user.body }</p>
      </div>
    );
  }

  export default Details;