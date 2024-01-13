import { useFormik } from "formik";

const Handle_Forms = () => {
    const formik = useFormik({
        initialValues : {
            name : "",
            email : "",
            password : ""
        }, 
        onSubmit : (value,{resetForm}) => {
            console.log(value),
            resetForm({values : ""})
        }
    })
    const {name,email,password} = formik.values;
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="Name">Name :</label>
                    <br />
                    <input type="text" name="name" placeholder="Enter your name !" onChange={formik.handleChange} value={name} />
                </div>
                <div>
                    <label htmlFor="Email">Email :</label>
                    <br />
                    <input type="text" name="email" placeholder="Enter your email !" onChange={formik.handleChange} value={email} />
                </div>
                <div>
                    <label htmlFor="Password">Password :</label>
                    <br />
                    <input type="text" name="password" placeholder="Enter your password !" onChange={formik.handleChange} value={password}/>
                </div><br />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Handle_Forms;