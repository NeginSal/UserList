import styles from '../../styles/users.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =await res.json();

    return {
        props: { users : data }
    }
}
const Users = ({users}) => {
    return (
        <div>
            <h1>All Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <a className={styles.single}>
                        <h3>User {user.id}</h3>
                    </a>
                </div>
            ))}
        </div>
     );
}

export default Users;