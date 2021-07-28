import styles from '../../styles/Edit.module.css'


const Edit = () => {

/*const handleClick = () =>
{
	const userid = document.querySelector(newuserId).value;
	const newtitle = document.querySelector(newtitle).value;
	const newbody = document.querySelector(newbody).value;

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
		  title: newtitle,
		  body: newbody,
		  userId: userid
		}),
	  })
	  .then(response => response.json())
	  .then(json => console.log(json))
};
*/

    return (
        <div className={styles.contact}>
        <div className={styles.contactform}>
          <form >
            <div>
              <label>id</label>
              <input type="text" name="id" required placeholder="id"
                className={styles.formgroup} id="newuserId" />
            </div>
            <div>
              <label>Title</label>
              <input type="text" name="title" required placeholder="title"
                className={styles.formgroup} id="newtitle"  />
            </div>
            <div>
              <label>Body</label>
              <input type="body" name="body" required placeholder="title"
                className={styles.formgroup} id="newbody"  />
            </div>
            <button type="submit" className={styles.btn}>Send</button>
          </form>
        </div>
        </div>
        //value = ""
        //onClick={handleClick}

     );
}

export default Edit;